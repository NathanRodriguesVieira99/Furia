'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export const HeaderLogo = () => {
    return (
        <motion.div
            className="mr-24 flex w-1/2 items-center justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
        >
            <Link href="/">
                <Image
                    className="m-4 cursor-pointer"
                    src="logo.svg"
                    alt="Logo Furia"
                    width={65}
                    height={65}
                />
            </Link>
        </motion.div>
    );
};
