import { motion } from "framer-motion";
import { ArrowRight, Building2, Clock3, Gem, Layers3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { brandPillars, brandStats, timeline } from "../utils/data";

const statIcons = [Layers3, Sparkles, Gem, Clock3];

function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
      className="pb-12 pt-28 sm:pt-32"
    >
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-0 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-blue">
                <Building2 size={14} />
                About DanAuto
              </span>
              <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl">
                DanAuto is building a more intelligent standard for premium automobiles.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">
                We design futuristic vehicles with clean proportions, confident
                presence, and AI-driven functionality that feels intuitive rather than
                excessive. Our goal is simple: create premium electric mobility that
                feels globally excellent and locally relevant.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80"
              alt="DanAuto design environment"
              className="h-[24rem] w-full rounded-[30px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-4">
          {brandStats.map((stat, index) => {
            const Icon = statIcons[index] || Sparkles;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="glass-panel rounded-[28px] p-6"
              >
                <span className="icon-shell">
                  <Icon size={18} />
                </span>
                <p className="mt-5 font-display text-4xl uppercase text-white">{stat.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/45">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {brandPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-luxury"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-luxury-gold">
                  Pillar
                </p>
                <h2 className="mt-4 font-display text-3xl uppercase text-white">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/60">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-8 shadow-luxury sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-blue">
                <Clock3 size={14} />
                Timeline
              </span>
              <h2 className="mt-4 font-display text-4xl uppercase text-white sm:text-5xl">
                The DanAuto story so far.
              </h2>
            </div>
            <Link
              to="/cars"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-luxury-gold"
            >
              Explore Cars
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-black/20 p-6"
              >
                <p className="font-display text-3xl uppercase text-luxury-gold">{item.year}</p>
                <h3 className="mt-4 font-display text-2xl uppercase text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default AboutPage;
