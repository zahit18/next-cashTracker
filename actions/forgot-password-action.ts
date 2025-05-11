"use server"

import { ErrorResponseSchema, ForgotPasswordSchema, SuccessSchema } from "@/src/schemas"

export type ForgotPasswordState = {
    errors: string[],
    success: string
}

export async function forgotPassword(prevState: ForgotPasswordState, formData: FormData) {
    const forgotPassword = ForgotPasswordSchema.safeParse({
        email: formData.get('email')
    })

    console.log(forgotPassword)

    if (!forgotPassword.success) {
        return {
            errors: forgotPassword.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    const url = `${process.env.API_URL}/auth/forgot-password`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: forgotPassword.data.email
        })
    })

    const json = await req.json()
    if (!req.ok) {
        const { error } = ErrorResponseSchema.parse(json)
        return {
            errors: [error],
            success: ''
        }
    }

    const success = SuccessSchema.parse(json)

    return {
        errors: [],
        success
    }
}