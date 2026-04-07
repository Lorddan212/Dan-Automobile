import { motion } from "framer-motion";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { brandPillars, brandStats } from "../utils/data";

function About() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] shadow-luxury">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[24rem] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80"
              alt="DanAuto studio"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.2),rgba(5,7,12,0.82))]" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-blue">
                <Building2 size={14} />
                About DanAuto
              </span>
              <p className="mt-3 max-w-xs font-display text-3xl uppercase text-white">
                Premium electric mobility shaped with intelligence and restraint.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-gold">
                <Sparkles size={14} />
                Design Philosophy
              </span>
              <h2 className="mt-4 max-w-2xl font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
                A more standard premium brand, elevated by AI and future-facing design.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
                DanAuto blends luxury product thinking, intelligent vehicle software,
                and modern automotive craftsmanship into a refined electric lineup for
                drivers, families, fleets, and executives.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {brandPillars.slice(0, 2).map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.26em] text-luxury-blue">
                      {pillar.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/60">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-4">
                {brandStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-[24px] border border-white/10 bg-black/20 p-5"
                  >
                    <p className="font-display text-3xl uppercase text-white">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/42">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-luxury-gold/25 bg-luxury-gold/10 px-5 py-3 text-xs uppercase tracking-[0.24em] text-white transition hover:border-luxury-gold/45"
              >
                Read Brand Story
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
