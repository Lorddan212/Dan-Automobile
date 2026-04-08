import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Clock3,
  Compass,
  Eye,
  Gem,
  Layers3,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { brandPillars, brandStats, companyName, timeline } from "../utils/data";

const statIcons = [Layers3, Sparkles, Gem, Clock3];

const aboutSlides = [
  {
    id: "design-lounge",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Immersive Design",
    title: "A design language shaped to feel calm, advanced, and unmistakably premium.",
    description:
      "DanAuto brings architectural thinking into mobility, blending sculpted surfaces, futuristic cabins, and elegant restraint."
  },
  {
    id: "future-drive",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "AI-Led Experience",
    title: "Software and intelligence are designed into the drive, not added after the fact.",
    description:
      "From guidance and safety to predictive service and personalization, every layer is built to make ownership feel smoother."
  },
  {
    id: "luxury-motion",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Future Mobility",
    title: "Luxury performance meets relevance for modern roads, cities, families, and fleets.",
    description:
      "The DanAuto range is imagined for forward-looking drivers who want beauty, confidence, and intelligent capability in one system."
  }
];

const missionVision = [
  {
    title: "Mission",
    icon: Compass,
    description:
      "To build a refined automobile brand that pairs luxury craftsmanship, intelligent software, and dependable engineering for the realities of modern mobility."
  },
  {
    title: "Vision",
    icon: Eye,
    description:
      "To make DanAuto a benchmark for premium African-rooted automotive innovation, where futuristic design and AI-led ownership feel natural, trusted, and globally respected."
  }
];

function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % aboutSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
      className="about-page"
    >
      <section className="about-page-hero-section">
        <div className="about-page-hero-stage">
          <AnimatePresence mode="wait">
            <motion.img
              key={aboutSlides[activeSlide].image}
              src={aboutSlides[activeSlide].image}
              alt={aboutSlides[activeSlide].title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="about-page-hero-image"
              loading="lazy"
              decoding="async"
            />
          </AnimatePresence>

          <div className="about-page-hero-overlay" />

          <div className="about-page-hero-content">
            <div className="about-page-hero-shell">
              <div className="about-page-hero-copy">
                <p className="about-page-hero-eyebrow">
                  <Building2 size={16} className="about-page-hero-eyebrow-icon" />
                  <span>About {companyName}</span>
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={aboutSlides[activeSlide].id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.45 }}
                  >
                    <p className="about-page-slide-label">{aboutSlides[activeSlide].eyebrow}</p>
                    <h1 className="about-page-slide-title">
                      <span className="about-page-slide-title-main">
                        {aboutSlides[activeSlide].title.split(" ").slice(0, -2).join(" ")}
                      </span>
                      <span className="about-page-slide-title-accent">
                        {aboutSlides[activeSlide].title.split(" ").slice(-2).join(" ")}
                      </span>
                    </h1>
                    <p className="about-page-slide-description">
                      {aboutSlides[activeSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="about-page-slide-dots">
                {aboutSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                    className={[
                      "about-page-slide-dot",
                      activeSlide === index
                        ? "about-page-slide-dot-active"
                        : "about-page-slide-dot-idle"
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page-story-section">
        <div className="about-page-story-shell">
          <div className="about-page-story-grid">
            <div>
              <span className="about-page-story-eyebrow">
                <Sparkles size={14} />
                Brand Story
              </span>
              <h2 className="about-page-story-title">
                {companyName} is designing a more thoughtful future for premium automobiles.
              </h2>
              <p className="about-page-story-paragraph about-page-story-paragraph-strong">
                {companyName} was created around a clear belief: luxury mobility should
                feel intelligent, elegant, and deeply human. We combine futuristic
                aesthetics, calm digital experiences, and advanced vehicle technology
                to create automobiles that do more than move people. They express
                confidence, reduce friction, and bring modern prestige to every journey.
              </p>
              <p className="about-page-story-paragraph about-page-story-paragraph-mid">
                Our approach is not built on noise or gimmicks. It is built on balance:
                strong design without excess, AI without confusion, and performance
                without compromise. That is how {companyName} aims to feel both
                international in standard and relevant to the roads, ambitions, and
                lifestyles of a new generation of drivers.
              </p>
              <p className="about-page-story-paragraph about-page-story-paragraph-soft">
                Beyond manufacturing vehicles, {companyName} is shaping an ownership
                experience built around confidence. We think about the full rhythm of
                modern mobility: the emotion of first sight, the intelligence of the
                cockpit, the comfort of every seat, the trust built through safety, and
                the seamless support that continues long after delivery. That wider view
                is what helps us create a brand that feels aspirational, useful, and
                enduring at the same time.
              </p>
            </div>

            <div className="about-page-mission-grid">
              {missionVision.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08 }}
                    className="about-page-mission-card"
                  >
                    <div className="about-page-mission-header">
                      <span className="icon-shell">
                        <Icon size={18} />
                      </span>
                      <p className="about-page-mission-title">{item.title}</p>
                    </div>
                    <p className="about-page-mission-description">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="about-page-stats-section">
        <div className="about-page-stats-grid">
          {brandStats.map((stat, index) => {
            const Icon = statIcons[index] || Sparkles;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="about-page-stat-card"
              >
                <span className="icon-shell">
                  <Icon size={18} />
                </span>
                <p className="about-page-stat-value">{stat.value}</p>
                <p className="about-page-stat-label">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="about-page-pillars-section">
        <div className="about-page-pillars-shell">
          <div className="about-page-pillars-grid">
            {brandPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="about-page-pillar-card"
              >
                <p className="about-page-pillar-eyebrow">Brand Pillar</p>
                <h2 className="about-page-pillar-title">{pillar.title}</h2>
                <p className="about-page-pillar-description">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-timeline-section">
        <div className="about-page-timeline-panel">
          <div className="about-page-timeline-header">
            <div>
              <span className="about-page-timeline-eyebrow">
                <Clock3 size={20} />
                Timeline
              </span>
              <h2 className="about-page-timeline-title">The {companyName} story so far.</h2>
            </div>
            <Link to="/cars" className="about-page-timeline-link">
              Explore Cars
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="about-page-timeline-grid">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="about-page-timeline-card"
              >
                <p className="about-page-timeline-year">{item.year}</p>
                <h3 className="about-page-timeline-card-title">{item.title}</h3>
                <p className="about-page-timeline-card-description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default AboutPage;
