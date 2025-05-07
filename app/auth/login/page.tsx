import LoginForm from "@/app/components/auth/LoginForm"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "CashTracker - Inicar Sesion",
    description: "CashTracker - Inicar Sesion"
}

export default function LoginPage() {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Iniciar Sesion</h1>
            <p className="text-3xl font-bold">y constrola tus <span className="text-amber-500">finanzas</span> </p>

            <LoginForm />

            <nav className="mt-10 flex flex-col space-y-4">
                <Link
                    href={'/auth/register'}
                    className="text-center text-gray-500"
                >
                    No tienes cuenta? Crea una
                </Link>

                <Link
                    href={'/auth/forgot-password'}
                    className="text-center text-gray-500"
                >
                    Olvidaste tu contraseña? Restablecer
                </Link>
            </nav>

        </>
    )
}
