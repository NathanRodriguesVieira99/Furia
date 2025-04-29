import type { CardImageProps } from '@/_types';
import Image from 'next/image';

export const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <div>
      <Image src={src} alt={alt} width={250} height={250} />
    </div>
  );
};
