import { z } from 'zod';

export const formSchema = z.object({
  email: z.email('Nieprawidłowy adres e-mail'),
  name: z.string().min(1, { message: 'Imię jest wymagane' }),
  number: z
    .number({ message: 'Numer 9 cyfrowy' })
    .min(100000000, { message: 'Numer musi mieć 9 cyfr' })
    .max(999999999, { message: 'Numer musi mieć 9 cyfr' }),
});

export type FormValues = z.infer<typeof formSchema>;
