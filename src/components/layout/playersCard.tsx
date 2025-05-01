'use client';

import { Card } from '@/components/Card';

// Dados mockados dos jogadores da FURIA
const mockPlayers = [
  {
    id: 1,
    nickname: 'Kaike "KSCERATO" Cerato',
    imageUrl: '/players/ks.webp',
    role: 'Rifler',
    country: 'Brazil',
    description:
      'Principal atirador da FURIA, conhecido por sua precisão e consistência',
  },

  {
    id: 2,
    nickname: 'Yuri "yuurih" Santos',
    imageUrl: '/players/yuriih.webp',
    role: 'Rifler',
    country: 'Brazil',
    description: 'Jogador versátil, excelente em situações de clutch',
  },
  {
    id: 3,
    nickname: 'Marcelo "chelo" Cespedes',
    imageUrl: '/players/chelo.webp',
    role: 'Support',
    country: 'Brazil',
    description:
      'Suporte confiável, especialista em utilitários e jogadas táticas',
  },
  {
    id: 4,
    nickname: 'Gabriel "FalleN" Toledo',
    imageUrl: '/players/falleN.webp',
    role: 'AWPer',
    country: 'Brazil',
    description: 'Lenda do CS brasileiro, agora como técnico da FURIA',
  },
  {
    id: 5,
    nickname: 'Felipe "skullz" Medeiros',
    imageUrl: '/players/skullz.webp',
    role: 'AWPer',
    country: 'Brazil',
    description:
      'Jovem promessa do cenário brasileiro, conhecido por sua mira precisa com a AWP e jogadas agressivas',
  },
];

export const PlayersCard = () => {
  return (
    <section className="mt-32 ml-2 grid w-full items-center justify-center gap-4 pr-2 font-bold text-yellow-600">
      <div className="flex flex-col text-center">
        <h1 className="text-2xl">Nossos Jogadores</h1>
        <div
          id="players_section"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {mockPlayers?.map((player) => (
            <div key={player.id}>
              <Card.Root>
                <Card.Image src={player.imageUrl} alt={player.nickname} />
                <Card.Content>
                  <Card.Title title={player.nickname} />
                  <Card.Description description={player.description} />
                </Card.Content>
              </Card.Root>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
