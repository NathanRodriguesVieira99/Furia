import Image from 'next/image';

interface CardImageProps {
  src: string;
  alt: string;
}

export const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <div>
      <Image src={src} alt={alt} width={250} height={250} />
    </div>
  );
};
