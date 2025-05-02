import { redirect } from 'next/navigation';
import { createClient } from '@/_lib/supabase/server';
import { Hero } from '@/components/layout/hero';
import { HeroText } from '@/components/layout/heroText';
import { PlayersCard } from '@/components/layout/playersCard';
import { ChatBot } from '@/components/ChatBot/ChatBot';

export default async function ProtectedPage() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect('/auth/login');
    }

    return (
        <main className="container mx-auto">
            <div className="fixed z-20 ml-[73%] flex items-start justify-start">
                <ChatBot />
            </div>
            <Hero />
            <HeroText />
            <PlayersCard />
        </main>
    );
}
