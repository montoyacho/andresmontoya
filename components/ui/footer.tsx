"use client";

import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname && pathname.startsWith("/contacto")) return null;
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden border-t border-slate-800 bg-slate-950"
    >
      <div className="relative w-full px-4 sm:px-6">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 opacity-25"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="w-full py-6 text-center sm:py-8">
          <div className="w-full bg-slate-900/40 px-4 py-6 shadow-2xl shadow-cyan-500/5 backdrop-blur sm:px-10 sm:py-8">
            <div className="flex flex-col items-center gap-4 sm:gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-center sm:text-left sm:flex-1">

                <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                  ¿Tienes una oportunidad laboral?
                </h2>

              </div>

              <div className="flex flex-col items-center gap-4 sm:items-center">
                <div className="flex flex-col items-center gap-2 sm:flex-row">
                  <a
                    href="https://wa.me/573023205918?text=Hola%20Andr%C3%A9s,%20vi%20tu%20portafolio%20y%20quisiera%20contactarte."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
                  >
                    CONTACTARME
                  </a>

                  <a
                    href="/CV-Andres-Montoya.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 px-6 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-white"
                  >
                    DESCARGAR CV
                  </a>
                </div>

              </div>

              <div className="flex items-center gap-2">
                <a
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                  href="https://github.com/montoyacho"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                >
                  <SiGithub className="h-5 w-5" />
                </a>

                <a
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                  href="https://www.linkedin.com/in/jeinerson-andrés-montoya-urrego"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>

                <a
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                  href="mailto:klaskatm@gmail.com"
                  aria-label="Correo"
                >
                  <MdEmail className="h-5 w-5" />
                </a>

                <a
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-cyan-400 transition hover:border-green-500 hover:bg-green-500 hover:text-white"
                  href="https://wa.me/573023205918"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-800 pt-5 text-center">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Andrés Montoya. Desarrollado con
              Next.js, TypeScript y TailwindCSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}