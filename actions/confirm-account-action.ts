"use server"

import { ErrorResponseSchema, SuccessSchema, TokenSchema } from "@/src/schemas"

export type ConfirmAccountState = {
    errors: string[],
    success: string
}

export async function confirmAccount(token: string, prevState: ConfirmAccountState) {

    const confirmToken = TokenSchema.safeParse(token)
    if (!confirmToken.success) {
        return {
            errors: confirmToken.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    // confirm account
    const url = `${process.env.API_URL}/auth/confirm-account`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: confirmToken.data
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

    console.log(req)
    console.log(json)

    const success = SuccessSchema.parse(json)
    return {
        errors: [],
        success
    }
}