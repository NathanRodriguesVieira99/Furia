import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="flex w-full items-center justify-center p-4">
      <Image
        src="/new_hero.png"
        quality={90}
        loading="lazy"
        alt="Jogadores da Furia de CS"
        className="rounded-[30px]"
        width={1100}
        height={1000}
      />
    </div>
  );
};
