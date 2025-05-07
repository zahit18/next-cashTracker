import ForgotPasswordForm from "@/app/components/auth/ForgotPasswordForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "CashTracker - Olvide mi Password",
    description: "CashTracker - Olvide mi Password"
}

export default function ForgotPasswordPage() {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Olvidaste tu Contraseña?</h1>
            <p className="text-3xl font-bold">y constrola tus <span className="text-amber-500">restablecela aqui</span> </p>

            <ForgotPasswordForm />

        </>
    )
}
