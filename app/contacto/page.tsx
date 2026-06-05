import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function ContactoPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-slate-950 text-slate-100 px-4 py-16">
      <section className="w-full max-w-4xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contacto
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">Hablemos de tu idea</h1>
          <p className="mt-3 text-slate-400">
            Estoy disponible para colaborar en proyectos tecnológicos, automatización de procesos, desarrollo de software, infraestructura y soluciones digitales. Escríbeme un mensaje y te responderé lo antes posible.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg bg-slate-900/40 p-6">
            <h3 className="mb-3 text-lg font-semibold">Datos de contacto</h3>
            <div className="flex items-center gap-2 text-slate-300">
              <MdLocationOn className="h-5 w-5 text-cyan-400" />
              <span>Bogotá, Colombia</span>
            </div>

            <div className="mt-4 flex flex-col gap-3 text-slate-300">
              <a
                href="mailto:klaskatm@gmail.com"
                className="inline-flex items-center gap-3 rounded-md bg-slate-800/60 px-4 py-2 transition hover:bg-slate-800/80"
              >
                <MdEmail className="h-5 w-5 text-cyan-400" />
                Escríbeme un correo
              </a>

              <a
                href="https://wa.me/573023205918"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md bg-slate-800/60 px-4 py-2 transition hover:bg-slate-800/80"
              >
                <SiWhatsapp className="h-5 w-5 text-cyan-400" />
                Enviar mensaje por WhatsApp
              </a>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/montoyacho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                  <SiGithub className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}