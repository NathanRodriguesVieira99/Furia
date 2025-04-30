'use client';

import type { CardDescriptionProps } from '@/_types';
import { motion } from 'motion/react';

export const CardDescription = ({ description }: CardDescriptionProps) => {
  return (
    <motion.div
      className="mt-4 text-white"
      initial={{ opacity: 0, x: 150, scale: 0.5 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 150, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <p>{description}</p>
    </motion.div>
  );
};
