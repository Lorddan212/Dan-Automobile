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
    eyebrow: "Showroom Advisory",
    title: "Clear vehicle guidance for buyers who want fewer surprises.",
    description:
      "DanAuto helps clients compare options, check documents, understand condition, and choose vehicles that fit daily use, image, and budget."
  },
  {
    id: "inspection-support",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Inspection Support",
    title: "Proper checks come before every serious recommendation.",
    description:
      "We look at physical condition, service history, diagnostic scans, market pricing, and ownership documents before clients move forward."
  },
  {
    id: "luxury-motion",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "After-Sales Care",
    title: "Premium ownership continues after delivery.",
    description:
      "Clients can return for workshop checks, detailing, EV support, registration help, fleet planning, and practical maintenance advice."
  }
];

const missionVision = [
  {
    title: "Mission",
    icon: Compass,
    description:
      "To make premium vehicle buying and ownership easier to understand through honest advice, careful inspection, and dependable service support."
  },
  {
    title: "Vision",
    icon: Eye,
    description:
      "To become a trusted Lagos destination for clients who want quality vehicles, transparent guidance, and long-term ownership care."
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
                {companyName} is building a clearer way to buy and maintain premium vehicles.
              </h2>
              <p className="about-page-story-paragraph about-page-story-paragraph-strong">
                {companyName} works with buyers who want the confidence of a premium
                vehicle without the guesswork that often comes with sourcing,
                inspecting, pricing, and documentation. Our team helps clients compare
                suitable options, understand condition, and plan the next step before
                money changes hands.
              </p>
              <p className="about-page-story-paragraph about-page-story-paragraph-mid">
                Our approach is practical: clear advice, realistic price context,
                diagnostic checks where required, and help with registration,
                insurance, delivery, workshop care, and fleet planning. The goal is to
                make each decision feel informed rather than rushed.
              </p>
              <p className="about-page-story-paragraph about-page-story-paragraph-soft">
                Beyond vehicle sales, {companyName} supports the daily realities of
                ownership. That includes service reminders, bodywork and detailing
                referrals, EV charging advice, pickup and drop-off coordination, and
                maintenance planning for private owners and business fleets.
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
