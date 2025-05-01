'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <motion.div
      className="flex w-full items-center justify-center p-4"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Image
        src="/hero2.webp"
        quality={90}
        loading="lazy"
        alt="Jogadores da Furia de CS"
        className="rounded-[30px]"
        width={1100}
        height={1000}
      />
    </motion.div>
  );
};
