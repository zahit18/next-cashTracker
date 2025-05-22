"use server"

export type UpdatePasswordState = {
    errors: string[],
    success: string
}

export async function updatePassword(prevState: UpdatePasswordState, formData: FormData) {

    console.log('desde update password')

    return {
        errors: [],
        success: ''
    }
}