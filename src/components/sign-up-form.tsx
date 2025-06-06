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
import Link from 'next/link';

export function SignUpForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'>) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        const supabase = createClient();
        setIsLoading(true);
        setError(null);

        if (password !== repeatPassword) {
            setError('As senhas são diferentes');
            setIsLoading(false);
            return;
        }

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${window.location.origin}/protected`,
                },
            });
            if (error) throw error;
            router.push('/auth/sign-up-success');
        } catch (error: unknown) {
            setError(
                error instanceof Error ? error.message : 'An error occurred'
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Sign up</CardTitle>
                    <CardDescription>Criar uma nova conta</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignUp}>
                        <div className="flex flex-col gap-6">
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
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="repeat-password">
                                        Repetir Senha
                                    </Label>
                                </div>
                                <Input
                                    id="repeat-password"
                                    type="password"
                                    required
                                    value={repeatPassword}
                                    onChange={(e) =>
                                        setRepeatPassword(e.target.value)
                                    }
                                />
                            </div>
                            {error && (
                                <p className="text-sm text-red-500">{error}</p>
                            )}
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Criando conta...' : 'Cadastrar'}
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Já possui uma conta?{' '}
                            <Link
                                href="/auth/login"
                                className="underline underline-offset-4"
                            >
                                Login
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
