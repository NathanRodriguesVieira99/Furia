' use client';

import { motion } from 'motion/react';
import type { CardTitleProps } from '@/_types';

export const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <motion.div
      className="mt-2 origin-center tracking-wide text-white"
      initial={{ opacity: 0, x: -150, scale: 0.5 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -150, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h1 className="text-lg leading-6 font-semibold">{title}</h1>
    </motion.div>
  );
};
