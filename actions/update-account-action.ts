"use server"

import getToken from "@/src/auth/token"
import { ErrorResponseSchema, SuccessSchema, UpdateAccountSchema } from "@/src/schemas"
import { revalidatePath } from "next/cache"

export type UpdateAccountState = {
    errors: string[],
    success: string
}

export async function updateAccount(prevState: UpdateAccountState, formData: FormData) {

    const updateAccount = UpdateAccountSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email')
    })

    if (!updateAccount.success) {
        return {
            errors: updateAccount.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    const token = getToken()
    const url = `${process.env.API_URL}/auth/update-account`
    const req = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: updateAccount.data.name,
            email: updateAccount.data.email
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

    revalidatePath('')

    return {
        errors: [],
        success
    }

}