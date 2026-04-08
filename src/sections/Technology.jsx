import { motion } from "framer-motion";
import { BatteryCharging, BrainCircuit, Cpu, ShieldCheck, Wind } from "lucide-react";
import { technologies } from "../utils/data";

const iconMap = {
  cpu: Cpu,
  battery: BatteryCharging,
  shield: ShieldCheck,
  wind: Wind
};

function Technology() {
  return (
    <section className="technology-section">
      <div className="technology-shell">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="technology-eyebrow">
            <BrainCircuit size={14} />
            AI & Technology
          </span>
          <h2 className="technology-title">
            DanAuto intelligence flows through every drive.
          </h2>
          <p className="technology-description">
            From safety perception to adaptive charging and personalization, DanAuto
            vehicles are designed to feel aware, calm, responsive, and unmistakably
            premium.
          </p>

          <div className="technology-list">
            {technologies.map((technology, index) => {
              const Icon = iconMap[technology.icon];

              return (
                <motion.div
                  key={technology.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="technology-card"
                >
                  <div className="technology-card-shell">
                    <span className="technology-card-icon">
                      <Icon size={18} />
                    </span>
                    <div className="technology-card-copy">
                      <div className="technology-card-header">
                        <h3 className="technology-card-title">{technology.title}</h3>
                        <span className="technology-card-metric">{technology.metric}</span>
                      </div>
                      <p className="technology-card-description">{technology.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="technology-visual"
        >
          <div className="technology-visual-glow" />

          <div className="technology-visual-frame">
            <img
              src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80"
              alt="DanAuto AI interior"
              className="technology-visual-image"
              loading="lazy"
              decoding="async"
            />
            <div className="technology-visual-overlay" />

            <div className="technology-visual-content">
              <div className="technology-visual-stats">
                <div className="technology-visual-stat">
                  <p className="technology-visual-stat-label">DanAI</p>
                  <p className="technology-visual-stat-value">Predictive Sense</p>
                </div>
                <div className="technology-visual-stat">
                  <p className="technology-visual-stat-label">Charging</p>
                  <p className="technology-visual-stat-value">15-22 min fast top-up</p>
                </div>
                <div className="technology-visual-stat">
                  <p className="technology-visual-stat-label">Safety</p>
                  <p className="technology-visual-stat-value">Guardian 360 AI</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Technology;
