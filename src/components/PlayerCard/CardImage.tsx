'use client';

import type { CardImageProps } from '@/_types';
import { motion } from 'motion/react';
import Image from 'next/image';

export const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 200, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Image src={src} alt={alt} width={250} height={250} />
    </motion.div>
  );
};
