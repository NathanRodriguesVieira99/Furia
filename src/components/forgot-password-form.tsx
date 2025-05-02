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
import { useState } from 'react';
import Link from 'next/link';

export function ForgotPasswordForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'>) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        const supabase = createClient();
        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/auth/update-password`,
            });
            if (error) throw error;
            setSuccess(true);
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
            {success ? (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            Verifique seu email
                        </CardTitle>
                        <CardDescription>
                            Instruções de redefinição de senha enviadas
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Se você se registrou usando seu e-mail e senha, você
                            receberá um e-mail de redefinição de senha.
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            Redefinir sua senha
                        </CardTitle>
                        <CardDescription>
                            Digite seu e-mail e enviaremos um link para
                            redefinir seu senha
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleForgotPassword}>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@examplo.com"
                                        required
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                {error && (
                                    <p className="text-sm text-red-500">
                                        {error}
                                    </p>
                                )}
                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isLoading}
                                >
                                    {isLoading
                                        ? 'Enviando...'
                                        : 'Enviar e-mail de redefinição'}
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
            )}
        </div>
    );
}
