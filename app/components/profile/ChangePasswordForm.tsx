"use client"

import { updatePassword, UpdatePasswordState } from "@/actions/update-password-action"
import { useFormState } from "react-dom"
import ErrorMessage from "../ui/ErrorMessage"
import { useEffect, useRef } from "react"
import { toast } from "react-toastify"

const initialState: UpdatePasswordState = {
    errors: [],
    success: ""
}

export default function ChangePasswordForm() {

    const ref = useRef<HTMLFormElement>(null)
    const [state, dispatch] = useFormState(updatePassword, initialState)

    useEffect(() => {
        if (state.success) {
            toast.success(state.success)
            ref.current?.reset()
        }
    }, [state])

    return (
        <>
            <form
                className=" mt-14 space-y-5"
                noValidate
                action={dispatch}
                ref={ref}
            >
                {state.errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
                <div className="flex flex-col gap-5">
                    <label
                        className="font-bold text-2xl"
                        htmlFor="current_password"
                    >Password Actual</label>
                    <input
                        id="current_password"
                        type="password"
                        placeholder="Password Actual"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="current_password"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <label
                        className="font-bold text-2xl"
                        htmlFor="password"
                    >Nuevo Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password de Registro"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="password"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <label
                        htmlFor="password_confirmation"
                        className="font-bold text-2xl"
                    >Repetir Password</label>

                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="Repite Password de Registro"
                        className="w-full border border-gray-300 p-3 rounded-lg"
                        name="password_confirmation"
                    />
                </div>

                <input
                    type="submit"
                    value='Cambiar Password'
                    className="bg-purple-950 hover:bg-purple-800 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer"
                />
            </form>
        </>
    )
}