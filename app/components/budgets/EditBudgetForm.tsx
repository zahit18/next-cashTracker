"use client"

import { useFormState } from "react-dom";
import { Budget } from "@/src/schemas";
import BudgetForm from "./BudgetForm";
import { editBudget, EditBudgetState } from "@/actions/edit-budget-action";
import ErrorMessage from "../ui/ErrorMessage";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const initialValues: EditBudgetState = {
    errors: [],
    success: ""
}

export default function EditBudgetForm({ budget }: { budget: Budget }) {

    const router = useRouter()
    const editBudgetWithId = editBudget.bind(null, budget.id)
    const [state, dispatch] = useFormState(editBudgetWithId, initialValues)

    useEffect(() => {
        if (state.success) {
            toast.success(state.success)
            router.push('/admin')
        }
    }, [state])

    return (
        <form
            className="mt-10 space-y-3"
            noValidate
            action={dispatch}
        >
            {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
            <BudgetForm
                budget={budget}
            />

            <input
                type="submit"
                className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
                value='Guardar Cambios'
            />
        </form>
    )
}
