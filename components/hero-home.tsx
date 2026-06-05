import Image from "next/image";
import HeroImage from "@/public/images/hero-image-01.png";
import ExperienceFlipCounter from "@/components/ExperienceFlipCounter";
import Reveal from "@/components/ui/reveal";

export default function HeroHome() {
  return (
    <section
      id="inicio"
      className="relative flex overflow-hidden bg-slate-950 px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.18),transparent_35%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-between md:min-h-[calc(100vh-80px)]">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_0.9fr]">
          <div className="relative z-10">
            <div className="flex gap-6">
              <div className="mt-3 h-48 w-1 rounded-full bg-cyan-400" />

              <div>
                  <Reveal delay={80}>
                    <h1 className="max-w-3xl pb-3 font-nacelle text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
                    Transformo procesos
                    <span className="block text-cyan-400">con tecnología</span>
                  </h1>
                </Reveal>

                <Reveal delay={160}>
                  <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-xl">
                    Profesional en automatización, análisis de datos y desarrollo de soluciones tecnológicas para optimizar operaciones.
                  </p>
                </Reveal>


                <Reveal delay={320}>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="/proyectos"
                      className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 sm:px-7 sm:py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-300"
                    >
                      VER MIS PROYECTOS
                      <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-cyan-400">→</span>
                    </a>

                    <a
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-7 py-4 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-white"
                    >
                      CONTÁCTAME
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={380} className="relative z-0 mt-6 w-full max-w-2xl">
                  <div className="rounded-[1rem] bg-slate-950/70 p-4 shadow-2xl backdrop-blur">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-center">
                      <div className="flex-1 rounded-3xl p-3">
                        <ExperienceFlipCounter />
                        <p className="mt-2 text-sm text-slate-400">Tiempo de experiencia</p>
                      </div>

                      <div className="w-full rounded-3xl p-4 sm:w-36">
                        <div className="text-xl font-bold text-cyan-400">24/7</div>
                        <p className="mt-1 text-sm text-slate-400">Monitoreo operativo</p>
                      </div>

                      <div className="w-full rounded-3xl p-4 sm:w-36">
                        <div className="text-xl font-bold text-cyan-400">100%</div>
                        <p className="mt-1 text-sm text-slate-400">Enfoque en soluciones</p>
                      </div>
                    </div>
                  </div>
                </Reveal>

              </div>
            </div>
          </div>

          <Reveal delay={300} className="relative z-10 mx-auto w-full max-w-md sm:max-w-xl">
            <div className="absolute -inset-8 rounded-full bg-cyan-500/20 blur-3xl" />
            <Image src={HeroImage} width={760} height={860} alt="Andrés Montoya" className="relative z-10 h-auto w-full object-contain" priority />
          </Reveal>
        </div>

        
      </div>
    </section>
  );
}