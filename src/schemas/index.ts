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

export const LoginSchema = z.object({
    email: z.string()
        .min(1, { message: 'El Email es Obligatorio' })
        .email({ message: 'Email no válido' }),
    password: z.string()
        .min(1, { message: 'El Password no puede ir vacio' })
})

export const SuccessSchema = z.string()

export const ErrorResponseSchema = z.object({
    error: z.string()
})

export const TokenSchema = z.string({ message: 'Token no valido' })
    .length(6, { message: 'Token no valido' })

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email()
})