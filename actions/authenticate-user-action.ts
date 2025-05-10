"use server"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ErrorResponseSchema, LoginSchema } from "@/src/schemas"

export type LoginActionState = {
    errors: string[]
}

export async function authenticate(prevState: any, formData: FormData) {

    const loginCredentials = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    const auth = LoginSchema.safeParse(loginCredentials)
    if (!auth.success) {
        return {
            errors: auth.error.errors.map(issue => issue.message)
        }
    }

    const url = `${process.env.API_URL}/auth/login`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: auth.data.password,
            email: auth.data.email
        })
    })

    const json = await req.json()

    if (!req.ok) {
        const { error } = ErrorResponseSchema.parse(json)
        return {
            errors: [error]
        }
    }

    // Set Cookies
    cookies().set({
        name: 'CASHTRACKER_TOKEN',
        value: json,
        httpOnly: true,
        path: '/'
    })

    redirect('/admin')
}