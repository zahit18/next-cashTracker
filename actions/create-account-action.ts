"use server"

import { RegisterSchema } from "@/src/schemas"

export async function register(formData: FormData) {

    const registerData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation'),
    }

    // validat
    const register = RegisterSchema.safeParse(registerData)
    const errors = register.error?.errors.map(error => error.message)
    console.log(register)
    console.log(errors)

    if(!register.success) return
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

    console.log(json)
}