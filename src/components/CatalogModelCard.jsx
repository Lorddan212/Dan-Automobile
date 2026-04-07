import { useState } from "react";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  Fuel,
  Gauge,
  Layers3,
  Search,
  Sparkles,
  Zap
} from "lucide-react";

function CatalogModelCard({ model }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left;
    const offsetY = event.clientY - bounds.top;
    const rotateY = ((offsetX / bounds.width) - 0.5) * 12;
    const rotateX = ((offsetY / bounds.height) - 0.5) * -12;

    setRotation({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => setRotation({ x: 0, y: 0 });

  return (
    <div className="perspective-1800">
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
        animate={{ rotateX: rotation.x, rotateY: rotation.y }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-luxury backdrop-blur-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${model.accent} opacity-60`} />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_40%,transparent_72%,rgba(255,255,255,0.06))]" />

        <div className="relative overflow-hidden p-5">
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
            <img
              src={model.previewImage}
              alt={model.displayName}
              className="h-64 w-full object-cover object-center transition duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.08),rgba(5,7,12,0.72))]" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-luxury-mist backdrop-blur-xl">
              <Layers3 size={12} />
              {model.brand}
            </div>
          </div>
        </div>

        <div className="relative px-6 pb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl uppercase text-white">{model.name}</h3>
              <p className="mt-2 text-sm leading-7 text-white/60">{model.shortDescription}</p>
            </div>
            <span className="rounded-full border border-luxury-blue/20 bg-luxury-blue/10 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-luxury-blue">
              {model.group}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-luxury-gold/20 bg-luxury-gold/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-luxury-gold">
              {model.formattedPrice}
            </span>
            <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70">
              {model.fuelType}
            </span>
            {model.isElectric ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-luxury-blue/20 bg-luxury-blue/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-luxury-blue">
                <Zap size={12} />
                EV Highlight
              </span>
            ) : null}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {model.types.map((type) => (
              <span
                key={type}
                className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/68"
              >
                {type}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[20px] border border-white/10 bg-black/25 p-4">
              <div className="flex items-center gap-3">
                <span className="icon-shell">
                  <Sparkles size={15} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                    Primary Type
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">{model.statA}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-black/25 p-4">
              <div className="flex items-center gap-3">
                <span className="icon-shell">
                  <Fuel size={15} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                    Fuel Type
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">{model.fuelType}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-black/25 p-4">
              <div className="flex items-center gap-3">
                <span className="icon-shell">
                  {model.isElectric ? <BatteryCharging size={15} /> : <Gauge size={15} />}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                    {model.isElectric ? "EV Range" : "Output"}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {model.isElectric ? model.range : model.horsepower}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[22px] border border-white/10 bg-black/20 p-4">
            <div className="flex items-start gap-3">
              <span className="icon-shell mt-1">
                {model.isElectric ? <BatteryCharging size={15} /> : <Search size={15} />}
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/42">
                  {model.isElectric ? "Electric highlight" : "Model highlight"}
                </p>
                <p className="mt-2 text-sm leading-7 text-white/68">{model.highlight}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default CatalogModelCard;
