// Styles
import './globals.css';

// Fonts
import { Mona_Sans } from 'next/font/google';

const monaSans = Mona_Sans({
    subsets: ['latin'],
});

// metadata
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Fúria',
    description: 'Desafio Técnico Fúria',
    icons: {
        icon: '/logo.svg',
    },
};

// Providers
import { AppProvider } from '@/_contexts/AppProvider';

// Root Layout
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
            <body className={`${monaSans.className}`}>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
