// este arquivo serve para a IA ter um bom conhecimento sobre a furia e dados atualizados, obtive ajuda para organizar usando IA

export const FURIA_KNOWLEDGE = [
  // ELENCO E STAFF 2025
  {
    question: 'Quem são os jogadores atuais da FURIA?',
    answer:
      'Elenco principal em 2025: arT (IGL), KSCERATO, yuurih, chelo, saffee (AWPer). Reservas: guerri. Coach: FalleN (Gabriel Toledo). Analista: TACO (Epitácio de Melo).',
    sources: ['https://furia.gg/team', 'https://www.hltv.org/team/8297/furia'],
  },

  // TÍTULOS RECENTES (2024-2025)
  {
    question: 'Quais títulos a FURIA venceu em 2024?',
    answer:
      'Em 2024, a FURIA venceu: \n- ESL Pro League Season 19 \n- IEM Dallas 2024 \n- BLAST Premier Fall Finals',
    sources: [
      'https://www.hltv.org/results?team=8297&startDate=2024-01-01&endDate=2024-12-31',
    ],
  },
  {
    question: 'A FURIA já ganhou um Major?',
    answer:
      'Até 2025, a FURIA ainda não venceu um Major de CS2. Seu melhor resultado foi semifinal no PGL Major Antwerp 2022.',
    sources: ['https://liquipedia.net/counterstrike/FURIA'],
  },

  // ESTATÍSTICAS DOS JOGADORES (2025)
  {
    question: 'Qual o rating do KSCERATO em 2025?',
    answer:
      'KSCERATO em 2025: \n- Rating HLTV: 1.22 \n- ADR: 86.7 \n- KAST: 74.3% \n- Clutches: 42',
    sources: ['https://www.hltv.org/stats/players/11893/kscerato'],
  },
  {
    question: 'Qual o mapa mais forte da FURIA em 2025?',
    answer:
      'Em 2025, a FURIA tem: \n- 78% winrate em Ancient \n- 72% em Mirage \n- 65% em Inferno \n- arT tem 1.35 rating como IGL em Ancient',
    sources: ['https://www.hltv.org/stats/teams/maps/8297/furia'],
  },

  // PATROCINADORES E FINANÇAS
  {
    question: 'Quem são os patrocinadores da FURIA em 2025?',
    answer:
      'Principais patrocinadores: \n- Mercado Livre (principal) \n- HyperX \n- Betway \n- Red Bull \n- TIM',
    sources: ['https://furia.gg/partners'],
  },

  // HISTÓRICO E CURIOSIDADES
  {
    question: 'Qual foi a maior conquista da FURIA?',
    answer:
      'A maior conquista até 2025 foi o título da ESL Pro League Season 17 em 2023, onde derrotaram a Vitality na final por 3-1.',
    sources: ['https://liquipedia.net/counterstrike/ESL/Pro_League/Season_17'],
  },
  {
    question: 'Quem é o dono da FURIA?',
    answer:
      'A FURIA foi fundada por Jaime Pádua e é presidida por Cris Guedes desde 2022. Em 2024, recebeu investimento do grupo XP Inc.',
    sources: [
      'https://www.theenemy.com.br/esports/furia-anuncia-entrada-da-xp-inc-como-investidora',
    ],
  },

  // ESTRATÉGIAS E ESTILO DE JOGO
  {
    question: 'Qual o estilo de jogo da FURIA?',
    answer:
      'Conhecida por: \n- Agressividade controlada (especialmente em T-side) \n- Execuções mid-round inovadoras \n- Uso criativo de utilitários \n- Foco em mapas como Ancient e Mirage',
    sources: [
      'https://www.hltv.org/news/35894/how-furia-redefined-aggressive-play',
    ],
  },

  // PRÓXIMOS EVENTOS
  {
    question: 'Em quais torneios a FURIA vai jogar em 2025?',
    answer:
      'Próximos compromissos confirmados: \n- IEM Katowice (Fev/2025) \n- ESL Pro League S20 (Mar/2025) \n- Major de Paris (Maio/2025) \n- BLAST Premier World Final (Dez/2025)',
    sources: ['https://www.hltv.org/events/archive/2025'],
  },

  // INFRAESTRUTURA
  {
    question: 'Onde fica o gaming house da FURIA?',
    answer:
      'A FURIA mantém sua gaming house em São Paulo (Vila Olímpia) e um centro de treinamento em Dallas (EUA) desde 2023.',
    sources: ['https://draft5.gg/noticia/furia-inaugura-nova-gaming-house'],
  },
];

export function searchFuriaKnowledge(userQuestion: string): {
  answer: string;
  sources: string[];
} {
  const lowerQuestion = userQuestion.toLowerCase();
  const DEFAULT_RESPONSE = {
    answer:
      'Não encontrei informações atualizadas sobre isso. Posso te ajudar com outro tópico sobre a FURIA?',
    sources: [],
  };

  const exactMatch = FURIA_KNOWLEDGE.find((item) =>
    lowerQuestion.includes(item.question.toLowerCase())
  );
  if (exactMatch) return exactMatch;

  const keywordMap: Record<string, string> = {
    jogador: 'Quem são os jogadores atuais da FURIA?',
    elenco: 'Quem são os jogadores atuais da FURIA?',
    titulo: 'Quais títulos a FURIA venceu em 2024?',
    rating: 'Qual o rating do KSCERATO em 2025?',
    mapa: 'Qual o mapa mais forte da FURIA em 2025?',
    patrocinador: 'Quem são os patrocinadores da FURIA em 2025?',
  };

  for (const [keyword, mappedQuestion] of Object.entries(keywordMap)) {
    if (lowerQuestion.includes(keyword)) {
      const match = FURIA_KNOWLEDGE.find(
        (item) => item.question.toLowerCase() === mappedQuestion.toLowerCase()
      );
      if (match) return match;
    }
  }

  const similarQuestion = FURIA_KNOWLEDGE.find(
    (item) =>
      item.question.toLowerCase().includes(lowerQuestion) ||
      lowerQuestion.includes(item.question.split(' ')[0].toLowerCase())
  );

  return similarQuestion || DEFAULT_RESPONSE;
}

export function formatFuriaResponse(
  answer: string,
  sources: string[] = []
): string {
  return `FURIA CS2 - Resposta Oficial:\n${answer}\n${
    sources.length > 0 ? `Fontes: ${sources.join(' | ')}` : ''
  }`;
}
