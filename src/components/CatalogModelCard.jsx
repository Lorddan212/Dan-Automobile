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
    <div className="catalog-card-scene">
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
        animate={{ rotateX: rotation.x, rotateY: rotation.y }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className="catalog-card"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className={`catalog-card-accent bg-gradient-to-br ${model.accent}`} />
        <div className="catalog-card-sheen" />

        <div className="catalog-card-body">
          <div className="catalog-card-media-wrap">
            <div className="catalog-card-media-frame">
              <img
                src={model.previewImage}
                alt={model.displayName}
                className="catalog-card-media"
                loading="lazy"
                decoding="async"
              />
              <div className="catalog-card-media-overlay" />
              <div className="catalog-card-brand-tag">
                <Layers3 size={12} />
                {model.brand}
              </div>
            </div>
          </div>

          <div className="catalog-card-heading">
            <div className="catalog-card-copy">
              <h3 className="catalog-card-name">{model.name}</h3>
              <p className="catalog-card-description">{model.shortDescription}</p>
            </div>
            <span className="catalog-card-group-tag">
              {model.group}
            </span>
          </div>

          <div className="catalog-card-meta">
            <span className="catalog-card-price-tag">
              {model.formattedPrice}
            </span>
            <span className="catalog-card-fuel-tag">
              {model.fuelType}
            </span>
            {model.isElectric ? (
              <span className="catalog-card-ev-tag">
                <Zap size={12} />
                EV Highlight
              </span>
            ) : null}
          </div>

          <div className="catalog-card-types">
            {model.types.map((type) => (
              <span
                key={type}
                className="catalog-card-type-pill"
              >
                {type}
              </span>
            ))}
          </div>

          <div className="catalog-card-stats">
            <div className="catalog-card-stat">
              <div className="catalog-card-stat-shell">
                <span className="icon-shell">
                  <Sparkles size={15} />
                </span>
                <div className="catalog-card-stat-copy">
                  <p className="catalog-card-stat-label">Primary Type</p>
                  <p className="catalog-card-stat-value">{model.statA}</p>
                </div>
              </div>
            </div>

            <div className="catalog-card-stat">
              <div className="catalog-card-stat-shell">
                <span className="icon-shell">
                  <Fuel size={15} />
                </span>
                <div className="catalog-card-stat-copy">
                  <p className="catalog-card-stat-label">Fuel Type</p>
                  <p className="catalog-card-stat-value">{model.fuelType}</p>
                </div>
              </div>
            </div>

            <div className="catalog-card-stat">
              <div className="catalog-card-stat-shell">
                <span className="icon-shell">
                  {model.isElectric ? <BatteryCharging size={15} /> : <Gauge size={15} />}
                </span>
                <div className="catalog-card-stat-copy">
                  <p className="catalog-card-stat-label">
                    {model.isElectric ? "EV Range" : "Output"}
                  </p>
                  <p className="catalog-card-stat-value">
                    {model.isElectric ? model.range : model.horsepower}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="catalog-card-highlight">
            <div className="catalog-card-highlight-shell">
              <span className="catalog-card-highlight-icon">
                {model.isElectric ? <BatteryCharging size={15} /> : <Search size={15} />}
              </span>
              <div className="catalog-card-highlight-copy">
                <p className="catalog-card-highlight-label">
                  {model.isElectric ? "Electric highlight" : "Model highlight"}
                </p>
                <p className="catalog-card-highlight-text">{model.highlight}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default CatalogModelCard;
