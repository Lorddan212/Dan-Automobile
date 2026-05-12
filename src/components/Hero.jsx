import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cars } from "../utils/data";
import Button from "./Button";

function Hero() {
  const heroCars = useMemo(() => cars.slice(0, 5), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, 80]);
  const visualY = useTransform(scrollY, [0, 500], [0, 120]);
  const activeCar = heroCars[activeIndex];

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroCars.length);
    }, 3800);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, heroCars.length]);

  useEffect(() => {
    heroCars.forEach((car) => {
      const image = new window.Image();
      image.src = car.heroImage;
    });
  }, [heroCars]);

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
            Lagos showroom. Verified premium vehicles.
          </span>

          <h1 className="hero-title">
            Find, inspect, and maintain your next premium vehicle
          </h1>

          <p className="hero-description">
            DanAuto helps private buyers, families, and businesses compare trusted
            vehicle options, arrange inspections, review ownership costs, and book
            aftersales support from one Lagos-based team.
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

          <div className="hero-visual-carousel" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCar.id}
                initial={{ opacity: 0, x: activeIndex % 2 === 0 ? -42 : 42, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: activeIndex % 2 === 0 ? 42 : -42, scale: 0.98 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="hero-visual-card"
              >
                <img
                  src={activeCar.heroImage}
                  alt={activeCar.name}
                  className="hero-visual-image"
                  loading="eager"
                  decoding="async"
                />
                <div className="hero-visual-overlay" />
                <div className="hero-visual-caption">
                  <div className="hero-visual-copy">
                    <p className="hero-visual-label">
                      {activeIndex === 2 ? "Popular Request" : "Available Consultation"}
                    </p>
                    <p className="hero-visual-name">{activeCar.name}</p>
                  </div>
                  <span className="hero-visual-index">
                    0{activeIndex + 1}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hero-visual-dots" aria-label="Featured car slides">
            {heroCars.map((car, index) => (
              <button
                key={car.id}
                type="button"
                className={[
                  "hero-visual-dot",
                  index === activeIndex ? "hero-visual-dot-active" : "hero-visual-dot-idle"
                ].join(" ")}
                aria-label={`Show ${car.name}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
