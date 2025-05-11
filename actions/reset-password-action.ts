"use server"

export type ResetPassowrdState = {
    errors: string[],
    success: string
}

export async function resetPassword(prevState: ResetPassowrdState, formData: FormData) {
    console.log('desde reset password')

    return {
        errors: [],
        success: ''
    }
}