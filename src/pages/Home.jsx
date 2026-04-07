import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, CalendarClock, CarFront, ShieldCheck, Sparkles } from "lucide-react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import About from "../sections/About";
import Showcase from "../sections/Showcase";
import Technology from "../sections/Technology";
import Testimonials from "../sections/Testimonials";
import { cars, services } from "../utils/data";

const homeHighlights = [
  {
    title: "AI-Driven Safety",
    description: "Guardian 360 monitors the world around you and responds before you do.",
    icon: ShieldCheck
  },
  {
    title: "Full Vehicle Lineup",
    description: "Sedans, SUVs, coupes, crossovers, roadsters, pickups, and executive vans.",
    icon: CarFront
  },
  {
    title: "Luxury by Default",
    description: "Refined materials, calm cabins, premium ergonomics, and layered digital controls.",
    icon: Sparkles
  }
];

function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
      className="pb-8"
    >
      <Hero />

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {homeHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="glass-panel rounded-[28px] p-6"
              >
                <span className="icon-shell">
                  <Icon size={18} />
                </span>
                <h3 className="mt-5 font-display text-2xl uppercase text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Showcase
        items={cars.slice(0, 6)}
        title="Featured DanAuto models"
        eyebrow="Luxury Lineup"
        description="Meet the new DanAuto collection, a complete premium range powered by design, intelligence, and electric performance."
        sectionId="featured-cars"
        showAllLink
      />

      <Technology />

      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-8 shadow-luxury sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-gold">
                <BrainCircuit size={14} />
                Services
              </span>
              <h2 className="mt-4 font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
                DanAuto doesn’t just build cars. We build the full premium experience.
              </h2>
            </div>
            <Button to="/services" icon={ArrowRight}>
              View All Services
            </Button>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-black/20 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="icon-shell">
                    <BrainCircuit size={18} />
                  </span>
                  <span className="rounded-full border border-luxury-blue/20 bg-luxury-blue/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-luxury-blue">
                    {service.metric}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl uppercase text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Testimonials />

      <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(201,164,92,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.12),transparent_28%),rgba(255,255,255,0.035)] p-8 shadow-luxury sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-gold">
                <CalendarClock size={14} />
                Booking
              </span>
              <h2 className="mt-4 font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
                Reserve a private DanAuto consultation today.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/60">
                Explore the lineup, compare models, configure finishes, and schedule a
                premium DanAuto experience with our concierge team.
              </p>
            </div>

            <Button to="/contact" icon={ArrowRight}>
              Book Appointment
            </Button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Home;
