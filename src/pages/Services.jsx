import { motion } from "framer-motion";
import {
  BrainCircuit,
  Briefcase,
  CarFront,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Headphones,
  Wrench,
  Zap
} from "lucide-react";
import Button from "../components/Button";
import { serviceCategories, services } from "../utils/data";

const iconMap = {
  sales: CarFront,
  maintenance: Wrench,
  premium: Sparkles,
  support: ShieldCheck,
  fleet: CarFront,
  training: BrainCircuit
};

const categoryIconMap = {
  Sales: Briefcase,
  Maintenance: Wrench,
  "Premium Services": Sparkles,
  "Customer Support": Headphones
};

function Services() {
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
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-gold">
            <Briefcase size={14} />
            DanAuto Services
          </span>
          <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl">
            Premium services that extend the DanAuto experience beyond the vehicle.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/62">
            Our service model combines private consultation, AI diagnostics, premium
            support, and corporate mobility solutions so owning a DanAuto feels
            seamless from day one.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-luxury"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="icon-shell">
                    <Icon size={18} />
                  </span>
                  <span className="rounded-full border border-luxury-blue/20 bg-luxury-blue/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-luxury-blue">
                    {service.metric}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl uppercase text-white">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/60">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          {serviceCategories.map((category, categoryIndex) => {
            const CategoryIcon = categoryIconMap[category.title] || Sparkles;

            return (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ delay: categoryIndex * 0.05 }}
              className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-luxury sm:p-8"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-luxury-gold">
                    <CategoryIcon size={14} />
                    {category.title}
                  </span>
                  <h2 className="mt-3 font-display text-3xl uppercase text-white sm:text-4xl">
                    {category.title} services
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/62">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-5 xl:grid-cols-2">
                {category.sections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: sectionIndex * 0.04 }}
                    className="rounded-[28px] border border-white/10 bg-black/20 p-5"
                  >
                    <h3 className="font-display text-2xl uppercase text-white">
                      {section.name}
                    </h3>
                    <div className="mt-4 space-y-3">
                      {section.items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="mt-1 shrink-0 text-luxury-gold" />
                          <p className="text-sm leading-7 text-white/66">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(201,164,92,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.12),transparent_28%),rgba(255,255,255,0.035)] p-8 shadow-luxury sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.35em] text-luxury-blue">
                Concierge
              </span>
              <h2 className="mt-4 font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
                Speak with the DanAuto team about private buying or fleet service.
              </h2>
            </div>
            <Button to="/contact">Contact DanAuto</Button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Services;
