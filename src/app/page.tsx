'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Home() {
    const router = useRouter();
    const supabase = createClientComponentClient();

    useEffect(() => {
        const checkAuth = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            router.replace(session ? '/auth/login' : '/protected');
        };
        checkAuth();
    }, [router, supabase]);

    return null;
}
