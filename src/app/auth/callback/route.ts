import { createClient } from '@/_lib/supabase/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');
    const next = searchParams.get('next') ?? '/protected';

    if (error) {
        console.error('OAuth Error:', {
            error,
            errorDescription,
            provider: 'discord',
        });
        return NextResponse.redirect(
            `${origin}/login?error=oauth_failed&provider=discord`
        );
    }

    if (!code) {
        return NextResponse.redirect(`${origin}/login?error=no_code`);
    }

    const supabase = await createClient();

    try {
        const { error: authError } =
            await supabase.auth.exchangeCodeForSession(code);

        if (authError) {
            console.error('Auth Exchange Error:', authError.message);
            return NextResponse.redirect(
                `${origin}/login?error=auth_exchange_failed`
            );
        }

        return NextResponse.redirect(`${origin}${next}`);
    } catch (err) {
        console.error('Unexpected Error:', err);
        return NextResponse.redirect(`${origin}/login?error=server_error`);
    }
}
