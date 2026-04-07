import { motion, useScroll, useTransform } from "framer-motion";
import { BrainCircuit, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { companyName, cars, heroMetrics } from "../utils/data";
import Button from "./Button";

function Hero() {
  const flagship = cars[0];
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, 80]);
  const visualY = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section className="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute left-[12%] top-[15%] h-40 w-40 rounded-full bg-luxury-blue/10 blur-3xl" />
        <div className="absolute right-[10%] top-[10%] h-52 w-52 rounded-full bg-luxury-gold/12 blur-3xl" />
        <div className="absolute bottom-[-3rem] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/6 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.98fr_1.02fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: contentY }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-luxury-gold/20 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.35em] text-luxury-mist/80 backdrop-blur-xl">
            <Sparkles size={14} />
            Standard Luxury. Futuristic Intelligence.
          </span>

          <h1 className="mt-7 max-w-4xl font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
            DanAuto drives the future of premium mobility.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Discover AI-driven cars, luxurious interiors, bold 3D-styled forms, and a
            complete lineup of premium electric vehicles built for modern African
            roads, lifestyles, and ambition.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to="/cars">Explore Cars</Button>
            <Button to="/services" variant="secondary">
              Our Services
            </Button>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: metric.delay, duration: 0.6 }}
                className="glass-panel rounded-[24px] p-5"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                  {metric.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ y: visualY }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.16),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(201,164,92,0.22),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] blur-3xl" />

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.05] p-5 shadow-luxury backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.16),transparent_32%,transparent_72%,rgba(255,255,255,0.08))]" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0f16]">
              <img
                src={flagship.heroImage}
                alt={flagship.name}
                className="h-[30rem] w-full object-cover object-center opacity-92 sm:h-[35rem]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.05),rgba(5,7,12,0.78))]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="max-w-md rounded-[30px] border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.32em] text-luxury-blue">
                    {companyName} Signature
                  </p>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <div>
                      <h2 className="font-display text-3xl uppercase text-white">
                        {flagship.name}
                      </h2>
                      <p className="mt-2 text-sm text-white/60">{flagship.shortDescription}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="glass-panel rounded-[24px] p-4">
                    <div className="flex items-center gap-3">
                      <span className="icon-shell">
                        <Zap size={18} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                          Acceleration
                        </p>
                        <p className="mt-1 text-lg font-semibold text-white">
                          {flagship.acceleration}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel rounded-[24px] p-4">
                    <div className="flex items-center gap-3">
                      <span className="icon-shell">
                        <BrainCircuit size={18} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                          AI Stack
                        </p>
                        <p className="mt-1 text-lg font-semibold text-white">DanAI Sense</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel rounded-[24px] p-4">
                    <div className="flex items-center gap-3">
                      <span className="icon-shell">
                        <ShieldCheck size={18} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                          Safety
                        </p>
                        <p className="mt-1 text-lg font-semibold text-white">Guardian 360</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
