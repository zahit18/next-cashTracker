import LoginForm from "@/app/components/auth/LoginForm"
import type { Metadata } from "next"

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

        </>
    )
}
