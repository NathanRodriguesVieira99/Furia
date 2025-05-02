'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const animation = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

export const HeaderLinks = () => {
    return (
        <motion.div className="text-md ml-2 flex w-[100px] gap-4 pr-2 text-yellow-600 sm:text-lg lg:text-lg">
            <Link
                href="#players_section"
                className="hover:text-yellow-500 hover:ease-in-out"
            >
                <motion.h1
                    className="font-semibold"
                    transition={{ duration: 0.4, delay: 0.2 }}
                    {...animation}
                >
                    Jogadores
                </motion.h1>
            </Link>
            <Link href="#" className="hover:text-yellow-500 hover:ease-in-out">
                <motion.h1
                    className="font-semibold"
                    transition={{ duration: 0.5, delay: 0.3 }}
                    {...animation}
                >
                    Resultados
                </motion.h1>
            </Link>
        </motion.div>
    );
};
