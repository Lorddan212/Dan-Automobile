import { motion } from "framer-motion";
import { BatteryCharging, BrainCircuit, Cpu, ShieldCheck, Wind } from "lucide-react";
import { technologies } from "../utils/data";

const iconMap = {
  cpu: Cpu,
  battery: BatteryCharging,
  shield: ShieldCheck,
  wind: Wind
};

function Technology() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-gold">
            <BrainCircuit size={14} />
            AI & Technology
          </span>
          <h2 className="mt-4 max-w-xl font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
            DanAuto intelligence flows through every drive.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/60">
            From safety perception to adaptive charging and personalization, DanAuto
            vehicles are designed to feel aware, calm, responsive, and unmistakably
            premium.
          </p>

          <div className="mt-10 grid gap-4">
            {technologies.map((technology, index) => {
              const Icon = iconMap[technology.icon];

              return (
                <motion.div
                  key={technology.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="glass-panel rounded-[26px] p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="icon-shell mt-1">
                      <Icon size={18} />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-xl uppercase text-white">
                          {technology.title}
                        </h3>
                        <span className="rounded-full border border-luxury-blue/20 bg-luxury-blue/10 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-luxury-blue">
                          {technology.metric}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-white/58">
                        {technology.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-5 shadow-luxury"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.18),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(201,164,92,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80"
              alt="DanAuto AI interior"
              className="h-[32rem] w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.18),rgba(5,7,12,0.8))]" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">DanAI</p>
                  <p className="mt-2 text-lg font-semibold text-white">Predictive Sense</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    Charging
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">15-22 min fast top-up</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    Safety
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">Guardian 360 AI</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Technology;
