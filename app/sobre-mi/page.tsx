import Link from "next/link";

export default function SobreMiPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100 px-4 py-10">
      <div className="w-full max-w-3xl rounded-3xl border border-slate-700/70 bg-slate-900/95 p-10 text-center shadow-xl shadow-slate-950/30">
        <h1 className="text-4xl font-semibold text-white">SOBRE MÍ</h1>
        <p className="mt-4 text-slate-300">Esta página está en blanco por ahora. Próximamente se agregará el contenido.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}