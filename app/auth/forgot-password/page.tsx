import ForgotPasswordForm from "@/app/components/auth/ForgotPasswordForm"
import type { Metadata } from "next"
import Link from "next/link"

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

            <nav className="mt-10 flex flex-col space-y-4">
                <Link
                    href={'/auth/login'}
                    className="text-center text-gray-500"
                >
                    Ya tienes cuenta? Iniciar Sesion
                </Link>

                <Link
                    href={'/auth/register'}
                    className="text-center text-gray-500"
                >
                    No tienes cuenta? Crea una
                </Link>
            </nav>

        </>
    )
}
