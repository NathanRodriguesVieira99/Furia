import { NextResponse } from 'next/server';
import { createClient } from '@/_lib/supabase/server';
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
        const {
            error: authError,
            data: { session },
        } = await supabase.auth.exchangeCodeForSession(code);

        if (authError || !session) {
            console.error('Session Exchange Error:', authError);
            return NextResponse.redirect(`${origin}/login?error=session_error`);
        }

        console.log('User session created for:', session.user.email);

        const forwardedHost = request.headers.get('x-forwarded-host');
        const isLocalEnv = process.env.NODE_ENV === 'development';
        const baseUrl = isLocalEnv
            ? origin
            : forwardedHost
              ? `https://${forwardedHost}`
              : origin;

        return NextResponse.redirect(`${baseUrl}${next}`);
    } catch (err) {
        console.error('Unexpected Error in callback:', err);
        return NextResponse.redirect(`${origin}/login?error=unexpected_error`);
    }
}
