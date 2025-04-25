import { redirect } from 'next/navigation';
import { createClient } from '@/_lib/supabase/server';
import { Hero } from '@/components/layout/hero';
import { HeroText } from '@/components/layout/heroText';
import { PlayersCard } from '@/components/layout/playersCard';

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/auth/login');
  }

  return (
    <main className="container mx-auto">
      <Hero />
      <HeroText />
      <PlayersCard />
    </main>
  );
}
