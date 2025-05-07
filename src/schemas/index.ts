import { z } from 'zod'

export const RegisterSchema = z.object({
    email: z.string()
        .min(1, { message: 'El Email es obligatorio' })
        .email({ message: 'Email no valido' }),
    name: z.string()
        .min(1, { message: 'Tu nombre no puede ir vacio' }),
    password: z.string()
        .min(8, { message: 'El password es muy corto, minimo 8 caracteres' }),
    password_confirmation: z.string(),
}).refine((data) => data.password === data.password_confirmation, {
    message: 'Los password no son iguales',
    path: ['password_confirmation']
})