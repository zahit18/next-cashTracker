"use server"

import { RegisterSchema } from "@/src/schemas"

export async function register(formData: FormData) {

    const registerData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('passsword_confirmation'),
    }

    // validat
    const register = RegisterSchema.safeParse(registerData)
    const errors = register.error?.errors.map(error => error.message)
    console.log(register)
    console.log(errors)

    // registrar usuario
    const url = `${process.env.API_URL}/auth/create-account`
}