import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Filter, LayoutGrid } from "lucide-react";
import CarCard from "../components/CarCard";
import { cars, carTypes } from "../utils/data";

function Cars() {
  const [activeType, setActiveType] = useState("All");

  const filteredCars = useMemo(() => {
    if (activeType === "All") {
      return cars;
    }

    return cars.filter((car) => car.type === activeType);
  }, [activeType]);

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
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-blue">
                <LayoutGrid size={14} />
                DanAuto Cars
              </span>
              <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl">
                Every DanAuto model and type in one premium lineup.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62">
                Explore sedans, SUVs, coupes, roadsters, crossovers, hyper EVs,
                pickups, and executive vans built with AI-first luxury engineering.
              </p>
            </div>

            <div className="rounded-[30px] bg-black/20 p-6">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-luxury-gold">
                <Filter size={14} />
                Filter by type
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {carTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveType(type)}
                    className={[
                      "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition",
                      activeType === type
                        ? "border-luxury-gold bg-luxury-gold/10 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                    ].join(" ")}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.05 }}
              >
                <CarCard car={car} priority={index < 2} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Cars;
