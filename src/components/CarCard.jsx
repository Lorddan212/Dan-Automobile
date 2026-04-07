import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { formatNaira } from "../utils/data";

function CarCard({ car, priority = false }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left;
    const offsetY = event.clientY - bounds.top;
    const rotateY = ((offsetX / bounds.width) - 0.5) * 14;
    const rotateX = ((offsetY / bounds.height) - 0.5) * -14;

    setRotation({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => setRotation({ x: 0, y: 0 });

  return (
    <div className="perspective-1800">
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
        animate={{ rotateX: rotation.x, rotateY: rotation.y, y: -rotation.x * 0.3 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.9 }}
        className="group relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-luxury backdrop-blur-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${car.accent} opacity-60`} />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_40%,transparent_72%,rgba(255,255,255,0.06))]" />

        <div className="relative flex h-full flex-col">
          <div className="relative overflow-hidden px-5 pt-5">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
              <img
                src={car.previewImage}
                alt={car.name}
                className="h-64 w-full object-cover object-center transition duration-700 group-hover:scale-110"
                loading={priority ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
            <div className="absolute left-10 top-10 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs uppercase tracking-[0.28em] text-luxury-mist/85 backdrop-blur-xl">
              {car.type}
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-3xl uppercase text-white">{car.name}</h3>
                <p className="mt-2 text-sm leading-7 text-white/60">{car.shortDescription}</p>
              </div>
              <p className="text-sm font-medium text-luxury-gold">{formatNaira(car.price)}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                <div className="flex items-center gap-3">
                  <span className="icon-shell">
                    <Zap size={16} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                      0-100 km/h
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">{car.acceleration}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-black/25 p-4">
                <div className="flex items-center gap-3">
                  <span className="icon-shell">
                    <Gauge size={16} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                      Range
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">{car.range}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {car.features.slice(0, 3).map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/65"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to={`/cars/${car.id}`}
                className="inline-flex items-center gap-3 rounded-full border border-luxury-blue/20 bg-luxury-blue/10 px-5 py-3 text-sm uppercase tracking-[0.24em] text-white transition hover:border-luxury-blue/40 hover:bg-luxury-blue/15"
              >
                View Details
                <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default CarCard;
