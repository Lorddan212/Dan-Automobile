import { motion } from "framer-motion";
import { ArrowRight, CarFront } from "lucide-react";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import { cars } from "../utils/data";

function Showcase({
  items = cars,
  title = "DanAuto Collection",
  eyebrow = "Curated Cars",
  description = "Explore the DanAuto lineup across premium body types, each shaped with AI-led safety, sculpted design, and refined electric performance.",
  sectionId = "showcase",
  showAllLink = false
}) {
  return (
    <section id={sectionId} className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-blue">
              <CarFront size={14} />
              {eyebrow}
            </span>
            <h2 className="mt-4 font-display text-4xl uppercase leading-tight text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/60">{description}</p>
          </div>

          {showAllLink ? (
            <Link
              to="/cars"
              className="inline-flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs uppercase tracking-[0.28em] text-white/70 transition hover:border-luxury-gold/30 hover:text-white"
            >
              View All Cars
              <ArrowRight size={16} />
            </Link>
          ) : null}
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <CarCard car={car} priority={index === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
