
export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-center my-4 py-2 bg-red-600 text-white font-bold uppercase text-sm">{children}</div>
    )
}
