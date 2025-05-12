"use server"

import getToken from "@/src/auth/token"
import { DraftBudgetSchema, SuccessSchema } from "@/src/schemas"

export type CreateBudgetState = {
    errors: string[],
    success: string
}

export async function createBudget(prevState: CreateBudgetState, formData: FormData) {

    const budget = DraftBudgetSchema.safeParse({
        name: formData.get('name'),
        amount: formData.get('amount')
    })
    if (!budget.success) {
        return {
            errors: budget.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    const token = getToken()
    const url = `${process.env.API_URL}/budgets`

    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: budget.data.name,
            amount: budget.data.amount
        })
    })

    const json = await req.json()

    const success = SuccessSchema.parse(json)

    return {
        errors: [],
        success
    }
}