import { z } from 'zod';

export type ProfileData = z.infer<typeof profileSchema>;

export const profileSchema = z.object({
  username: z
    .string()
    .min(3, 'Mínimo de 3 caracteres')
    .max(24, 'Máximo de 24 caracteres')
    .regex(/^[a-z0-9_]+$/, 'Apenas letras minúsculas, números e _'),

  bio: z.string().max(160).optional(),

  csgoRank: z.string().optional(),

  favoritePlayer: z
    .enum([
      'MOLODOY',
      'YEKINDAR',
      'FalleN',
      'KSCERATO',
      'yuurih',
      'skullz',
      'chelo',
    ])
    .optional(),

  avatarUrl: z.string().url('URL inválida').optional(),
});
