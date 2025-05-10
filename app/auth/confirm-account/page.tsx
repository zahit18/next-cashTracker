import ConfirmAccountForm from "@/app/components/auth/ConfirmAccountForm";

export default function ConfirmAccountPage() {
  return (
    <>
      <h1 className="font-black text-6xl text-purple-950">Confirmar tu cuenta</h1>
      <p className="text-3xl font-bold">Ingresa el codigo que recibiste
        <span className="text-amber-500"> por email</span>
      </p>

      <ConfirmAccountForm />
    </>
  )
}
