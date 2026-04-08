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
    <div className="car-card-scene">
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
        animate={{ rotateX: rotation.x, rotateY: rotation.y, y: -rotation.x * 0.3 }}
        transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.9 }}
        className="car-card"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className={`car-card-accent bg-gradient-to-br ${car.accent}`} />
        <div className="car-card-sheen" />

        <div className="car-card-inner">
          <div className="car-card-media-wrap">
            <div className="car-card-media-frame">
              <img
                src={car.previewImage}
                alt={car.name}
                className="car-card-media"
                loading={priority ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
            <div className="car-card-type-tag">
              {car.type}
            </div>
          </div>

          <div className="car-card-body">
            <div className="car-card-heading">
              <div className="car-card-copy">
                <h3 className="car-card-name">{car.name}</h3>
                <p className="car-card-description">{car.shortDescription}</p>
              </div>
              <p className="car-card-price">{formatNaira(car.price)}</p>
            </div>

            <div className="car-card-stats">
              <div className="car-card-stat">
                <div className="car-card-stat-shell">
                  <span className="icon-shell">
                    <Zap size={16} />
                  </span>
                  <div className="car-card-stat-copy">
                    <p className="car-card-stat-label">0-100 km/h</p>
                    <p className="car-card-stat-value">{car.acceleration}</p>
                  </div>
                </div>
              </div>

              <div className="car-card-stat">
                <div className="car-card-stat-shell">
                  <span className="icon-shell">
                    <Gauge size={16} />
                  </span>
                  <div className="car-card-stat-copy">
                    <p className="car-card-stat-label">Range</p>
                    <p className="car-card-stat-value">{car.range}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="car-card-features">
              {car.features.slice(0, 3).map((feature) => (
                <span
                  key={feature}
                  className="car-card-feature"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="car-card-action">
              <Link
                to={`/cars/${car.id}`}
                className="car-card-link"
              >
                View Details
                <ArrowRight size={16} className="car-card-link-icon" />
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default CarCard;
