import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cars } from "../utils/data";
import Button from "./Button";

function Hero() {
  const heroCars = cars.slice(0, 5);
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, 80]);
  const visualY = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-orb hero-bg-orb-left" />
        <div className="hero-bg-orb hero-bg-orb-right" />
        <div className="hero-bg-orb hero-bg-orb-bottom" />
      </div>

      <div className="hero-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: contentY }}
          className="hero-content"
        >
          <span className="hero-eyebrow">
            <Sparkles size={14} />
            Standard Luxury. Futuristic Intelligence.
          </span>

          <h1 className="hero-title">
            DanAuto drives the future of premium mobility.
          </h1>

          <p className="hero-description">
            Discover AI-driven cars, luxurious interiors, bold 3D-styled forms, and a
            complete lineup of premium electric vehicles built for modern African
            roads, lifestyles, and ambition.
          </p>

          <div className="hero-actions">
            <Button to="/cars">Explore Cars</Button>
            <Button to="/services" variant="secondary">
              Our Services
            </Button>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ y: visualY }}
          className="hero-visual"
        >
          <div className="hero-visual-glow" />

          <div className="hero-visual-stack">
            {heroCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.15 + index * 0.08 }}
                className={[
                  "hero-visual-card",
                  index % 2 === 0 ? "hero-visual-card-left" : "hero-visual-card-right",
                  index === 2 ? "hero-visual-card-featured" : ""
                ].join(" ")}
              >
                <img
                  src={car.heroImage}
                  alt={car.name}
                  className={[
                    "hero-visual-image",
                    index === 2 ? "hero-visual-image-featured" : "hero-visual-image-standard"
                  ].join(" ")}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="hero-visual-overlay" />
                <div className="hero-visual-caption">
                  <div className="hero-visual-copy">
                    <p className="hero-visual-label">
                      {index === 2 ? "Signature Model" : "DanAuto Collection"}
                    </p>
                    <p className="hero-visual-name">{car.name}</p>
                  </div>
                  <span className="hero-visual-index">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
