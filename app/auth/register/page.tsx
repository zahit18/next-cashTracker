import type { Metadata } from "next"
import RegisterForm from "@/app/components/auth/RegisterForm"
import Link from "next/link"

export const metadata: Metadata = {
    title: "CashTracker - Crear Cuenta",
    description: "CashTracker - Crear Cuenta"
}

export default function RegisterPage() {
    return (
        <>
            <h1 className="font-black text-6xl text-purple-950">Crear una cuenta</h1>
            <p className="text-3xl font-bold">y constrola tus <span className="text-amber-500">finanzas</span> </p>

            <RegisterForm />

            <nav className="mt-10 flex flex-col space-y-4">
                <Link
                    href={'/auth/login'}
                    className="text-center text-gray-500"
                >
                    Ya tienes cuenta? Iniciar Sesion
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
