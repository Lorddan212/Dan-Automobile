import { motion } from "framer-motion";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { brandPillars, brandStats } from "../utils/data";

function About() {
  return (
    <section className="about-section">
      <div className="about-panel">
        <div className="about-grid">
          <div className="about-media">
            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80"
              alt="DanAuto studio"
              className="about-media-image"
              loading="lazy"
              decoding="async"
            />
            <div className="about-media-overlay" />
            <div className="about-media-content">
              <span className="about-media-eyebrow">
                <Building2 size={14} />
                About DanAuto
              </span>
              <p className="about-media-title">
                Premium electric mobility shaped with intelligence and restraint.
              </p>
            </div>
          </div>

          <div className="about-copy-panel">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <span className="about-copy-eyebrow">
                <Sparkles size={14} />
                Design Philosophy
              </span>
              <h2 className="about-copy-title">
                A more standard premium brand, elevated by AI and future-facing design.
              </h2>
              <p className="about-copy-description">
                DanAuto blends luxury product thinking, intelligent vehicle software,
                and modern automotive craftsmanship into a refined electric lineup for
                drivers, families, fleets, and executives.
              </p>

              <div className="about-pillars-grid">
                {brandPillars.slice(0, 2).map((pillar) => (
                  <div
                    key={pillar.title}
                    className="about-pillar-card"
                  >
                    <p className="about-pillar-title">{pillar.title}</p>
                    <p className="about-pillar-description">{pillar.description}</p>
                  </div>
                ))}
              </div>

              <div className="about-stats-grid">
                {brandStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08 }}
                    className="about-stat-card"
                  >
                    <p className="about-stat-value">{stat.value}</p>
                    <p className="about-stat-label">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="about-story-link">
                Read Brand Story
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
