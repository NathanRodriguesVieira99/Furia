'use client';

import { motion } from 'motion/react';

const animation = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};

export const HeroText = () => {
  return (
    <motion.div
      className="text-md mt-24 flex w-full flex-col items-center justify-center text-center font-semibold text-white sm:text-xl md:text-2xl lg:text-3xl"
      {...animation}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <motion.h2 className="mt-3 leading-8">
        {' '}
        O seu hub definitivo para acompanhar tudo sobre a{' '}
        <motion.span
          className="text-yellow-600"
          {...animation}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          FURIA
        </motion.span>{' '}
      </motion.h2>
      <motion.p
        className="mt-6 w-full p-2 leading-8.5"
        {...animation}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Esports no cenário competitivo de CS2 em 2025! Desde emocionantes
        clutches do KSCERATO até as estratégias ousadas do arT, nosso site é o
        lugar onde os fãs se conectam, celebram e mergulham no universo da
        <motion.span
          className="ml-1 text-yellow-600"
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          FURIA
        </motion.span>
        .
      </motion.p>
      <motion.p
        className="mt-1 w-full p-2 leading-8.5"
        {...animation}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {' '}
        Aqui, você não só acompanha os melhores momentos do time, mas também
        descobre mais sobre seus jogadores favoritos!.
      </motion.p>
    </motion.div>
  );
};
