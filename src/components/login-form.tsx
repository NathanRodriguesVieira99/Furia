'use client';

import { cn } from '@/_lib/utils';
import { createClient } from '@/_lib/supabase/client';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'>) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isEmailLoading, setIsEmailLoading] = useState(false);
    const [isDiscordLoading, setIsDiscordLoading] = useState(false);
    const router = useRouter();

    // função de login com email e senha
    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const supabase = createClient();
        setIsEmailLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (error) throw error;
            router.push('/protected');
        } catch (error: unknown) {
            setError(
                error instanceof Error ? error.message : 'An error occurred'
            );
        } finally {
            setIsEmailLoading(false);
        }
    };

    // função para login social com discord
    const handleDiscordLogin = async () => {
        const supabase = createClient();
        setIsDiscordLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'discord',
                options: {
                    redirectTo: 'https://furia-bay.vercel.app/auth/callback',
                },
            });
            if (error) throw error;
        } catch (error: unknown) {
            setError(
                error instanceof Error ? error.message : 'An error occurred'
            );
        } finally {
            setIsDiscordLoading(false);
        }
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>Digite seu e-mail</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Formulário de Email/Senha */}
                    <form onSubmit={handleEmailLogin} className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@examplo.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Senha</Label>
                                <Link
                                    href="/auth/forgot-password"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Esqueceu sua senha?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && (
                            <p className="text-sm text-red-500">{error}</p>
                        )}
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isEmailLoading}
                        >
                            {isEmailLoading ? 'Logando...' : 'Login com Email'}
                        </Button>
                    </form>

                    {/* Botão de login com discord */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                OU CONTINUE COM
                            </span>
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        className="flex w-full items-center gap-2"
                        onClick={handleDiscordLogin}
                        disabled={isDiscordLoading}
                    >
                        {isDiscordLoading ? (
                            'Conectando...'
                        ) : (
                            <>
                                Login com Discord
                                <FaDiscord className="h-5 w-5" />
                            </>
                        )}
                    </Button>

                    <div className="mt-4 text-center text-sm">
                        Não tem uma conta?{' '}
                        <Link
                            href="/auth/sign-up"
                            className="underline underline-offset-4"
                        >
                            Cadastre-se
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
