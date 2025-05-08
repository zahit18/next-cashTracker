"use server"

import { ErrorResponseSchema, RegisterSchema, SuccessSchema } from "@/src/schemas"


type ActionStateType = {
    errors: string[],
    success: string
}

export async function register(prevState: ActionStateType, formData: FormData) {

    const registerData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation'),
    }

    // validat
    const register = RegisterSchema.safeParse(registerData)

    if (!register.success) {
        const errors = register.error.errors.map(error => error.message)
        return {
            errors,
            success: ''
        }
    }
    // if (!register.success) {
    //     throw new Error(register.error.errors.map(e => e.message).join(', '))
    // }

    // registrar usuario
    const url = `${process.env.API_URL}/auth/create-account`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: register.data?.name,
            password: register.data?.password,
            email: register.data?.email
        })
    })

    const json = await req.json()

    if(req.status === 409) {
        const {error} = ErrorResponseSchema.parse(json)

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