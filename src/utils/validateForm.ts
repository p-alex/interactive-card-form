import { z } from 'zod';

const onlyNumbers = /^\d+$/gm;
const onlyLetters = /^\D+$/gm;

export const formSchema = z.object({
  name: z.string().min(1, "Can't be blank").regex(onlyLetters, 'Only letters'),
  number: z
    .string()
    .min(1, "Can't be blank")
    .regex(onlyNumbers, 'Wrong format, numbers only')
    .length(16, 'Invalid card number'),
  month: z
    .number({ invalid_type_error: "Can't be blank" })
    .refine((curr) => curr >= 1 && curr <= 12, 'Invalid month'),
  year: z
    .number({ invalid_type_error: "Can't be blank" })
    .refine((curr) => curr > 0, 'Invalid year'),
  cvc: z
    .number({ invalid_type_error: "Can't be blank" })
    .refine((curr) => curr >= 100 && curr <= 999, 'Invalid cvc'),
});

export type FormInput = z.TypeOf<typeof formSchema>;
