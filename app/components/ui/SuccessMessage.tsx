
export default function SuccessMessage({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-center my-4 bg-amber-500 text-white font-bold uppercase text-sm">{children}</div>
    )
}
