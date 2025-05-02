/*
LÓGICA PRONTA FEITA COM AJUDA DE IA, POIS OS TUTORIAIS QUE SEGUI NÃO FUNCIONAVAM DE FORMA ALGUMA 
*/
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import {
    searchFuriaKnowledge,
    formatFuriaResponse,
} from '@/_services/gemini-services';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const MODELS = ['gemini-1.5-flash', 'gemini-1.0-pro'] as const;
const MAX_RETRIES = 2;

async function tryModel(
    modelName: (typeof MODELS)[number],
    prompt: string,
    history: any[]
) {
    const model = genAI.getGenerativeModel({
        model: modelName,
        generationConfig: { maxOutputTokens: 1000 },
    });

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(prompt);
    return result.response.text();
}

export async function POST(req: Request) {
    if (!process.env.GEMINI_API_KEY) {
        return NextResponse.json(
            { error: 'Chave da API não configurada' },
            { status: 401 }
        );
    }

    try {
        const { messages } = await req.json();
        const lastUserMessage =
            messages.filter((m: any) => m.role === 'user').pop()?.content || '';

        // Busca conhecimento especializado sobre a FURIA
        const furiaData = searchFuriaKnowledge(lastUserMessage);
        const formattedResponse = formatFuriaResponse(
            furiaData.answer,
            furiaData.sources
        );

        const history = [
            {
                role: 'user',
                parts: [
                    {
                        text: `Você é o FuriaBot, assistente oficial da FURIA Esports. 
        Regras estritas:
        1. Responda APENAS sobre FURIA CS2
        2. Use linguagem formal sem emojis
        3. Nunca use markdown (** ou qualquer formatação)
        4. Seja conciso e direto
        5. Use estes dados verificados: ${formattedResponse}
        6. Priorize buscar os dados mais recentes (ano 2025 - 2024)
        7. Pode responder informações nao relacionadas exatamente a CS, porém associadas a Furia como nome do criador, ano de criação, ex membros etc
        `,
                    },
                ],
            },
            {
                role: 'model',
                parts: [
                    {
                        text: 'Entendido! Estou pronto para responder sobre a FURIA CS com informações precisas e atualizadas.',
                    },
                ],
            },
            ...messages.map((m: any) => ({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [{ text: m.content }],
            })),
        ];

        let lastError;
        for (const model of MODELS) {
            try {
                const response = await tryModel(
                    model,
                    lastUserMessage,
                    history
                );
                return NextResponse.json({
                    id: Date.now().toString(),
                    role: 'assistant',
                    content: response,
                });
            } catch (error) {
                lastError = error;
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }

        throw lastError;
    } catch (error: any) {
        console.error('Erro no Gemini:', error);
        return NextResponse.json(
            {
                error: 'Desculpe, estou com dificuldades técnicas. Tente novamente mais tarde.',
                details:
                    process.env.NODE_ENV === 'development'
                        ? error.message
                        : undefined,
            },
            { status: 503 }
        );
    }
}
