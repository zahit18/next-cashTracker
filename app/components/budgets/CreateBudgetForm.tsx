"use client"

import { createBudget, CreateBudgetState } from "@/actions/create-budget-action"
import { useFormState } from "react-dom"
import ErrorMessage from "../ui/ErrorMessage"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import BudgetForm from "./BudgetForm"

const initialState: CreateBudgetState = {
    errors: [],
    success: ""
}

export default function CreateBudgetForm() {

    const router = useRouter()
    const [state, dispatch] = useFormState(createBudget, initialState)

    useEffect(() => {
        if (state.success) {
            toast.success(state.success, {
                onClose: () => {
                    router.push("/admin")
                },
                onClick: () => {
                    router.push("/admin")
                }
            })
        }
    }, [state])

    return (
        <form
            className="mt-10 space-y-3"
            noValidate
            action={dispatch}
        >
            {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}

            <BudgetForm />

            <input
                type="submit"
                className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
                value='Crear Presupuesto'
            />
        </form>
    )
}