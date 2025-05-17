"use server"

import getToken from "@/src/auth/token"
import { DraftExpenseSchema, ErrorResponseSchema, SuccessSchema } from "@/src/schemas"

export type CreateExpenseState = {
    errors: string[],
    success: string
}

export default async function createExpense(budgetId: number, prevState: CreateExpenseState, formData: FormData) {
    const expenseData = {
        name: formData.get('name'),
        amount: formData.get('amount')
    }

    const expense = DraftExpenseSchema.safeParse(expenseData)
    if (!expense.success) {
        return {
            errors: expense.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    // Generar gastp
    const token = getToken()
    const url = `${process.env.API_URL}/budgets/${budgetId}/expenses`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            name: expense.data.name,
            amount: expense.data.amount
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
    console.log(success)


    return {
        errors: [],
        success
    }
}