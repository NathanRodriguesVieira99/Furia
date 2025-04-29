'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';

export const ChatBot = () => {
  /*
LÓGICA PRONTA FEITA COM AJUDA DE IA, POIS OS TUTORIAIS QUE SEGUI NÃO FUNCIONAVAM DE FORMA ALGUMA 
*/
  const [messages, setMessages] = useState<
    {
      id: string;
      role: 'user' | 'assistant';
      content: string;
    }[]
  >([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: data.content,
        },
      ]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mt-48 hidden items-center justify-center md:hidden lg:ml-[-20px] lg:flex">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Furia AI</CardTitle>
          <CardDescription>
            Tudo sobre a Furia CS em um só lugar!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] w-full space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex gap-3">
                <Avatar>
                  <AvatarFallback>
                    {message.role === 'user' ? 'NR' : 'FR'}
                  </AvatarFallback>
                  <AvatarImage
                    src={
                      message.role === 'user'
                        ? 'https://github.com/NathanRodriguesVieira99.png'
                        : '/logo-furia.svg'
                    }
                  />
                </Avatar>

                <div className="flex-1">
                  <p className="font-semibold text-slate-700">
                    {message.role === 'user' ? 'Nathan' : 'Furia AI'}:
                  </p>
                  <p className="text-sm whitespace-pre-wrap text-slate-600">
                    {message.content || (
                      <span className="text-slate-400">Digitando...</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="flex w-full gap-2" onSubmit={handleSubmit}>
            <Input
              placeholder="Como posso te ajudar?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <Button type="submit">
              {isLoading ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};
