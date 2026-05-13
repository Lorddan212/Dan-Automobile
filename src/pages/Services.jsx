import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrainCircuit,
  Briefcase,
  CarFront,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Headphones,
  Wrench
} from "lucide-react";
import Button from "../components/Button";
import { galleryItems, serviceCategories, services } from "../utils/data";

const iconMap = {
  sales: CarFront,
  maintenance: Wrench,
  premium: Sparkles,
  support: ShieldCheck,
  fleet: CarFront,
  training: BrainCircuit
};

const categoryIconMap = {
  Sales: Briefcase,
  Maintenance: Wrench,
  "Premium Services": Sparkles,
  "Customer Support": Headphones
};

const serviceHeroSlides = [
  galleryItems[2],
  galleryItems[0],
  galleryItems[6]
].filter(Boolean);

function Services() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = serviceHeroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % serviceHeroSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    serviceHeroSlides.forEach((slide) => {
      const image = new window.Image();
      image.src = slide.image;
    });
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
      className="services-page"
    >
      <section className="services-hero-section">
        <div className="services-hero-stage" aria-label="Service highlights">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide.id}
              src={currentSlide.image}
              alt={currentSlide.title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="services-hero-image"
              loading="eager"
              decoding="async"
            />
          </AnimatePresence>

          <div className="services-hero-overlay" />

          <div className="services-hero-content">
            <div className="services-hero-shell">
              <div className="services-hero-copy">
                <span className="services-eyebrow">
                  <Briefcase size={14} />
                  DanAuto Services
                </span>
                <h1 className="services-title">
                  <span className="services-title-line">Buying, servicing, and</span>
                  <span className="services-title-line-accent">managing premium cars.</span>
                </h1>
                <p className="services-description">
                  <span className="services-description-line">Verified sourcing, inspections,</span>
                  <span className="services-description-line">workshop care, EV support,</span>
                  <span className="services-description-line">fleet upkeep, and paperwork support.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cards-section">
        <div className="services-cards-grid">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                className="services-overview-card"
              >
                <div className="services-overview-card-header">
                  <span className="icon-shell">
                    <Icon size={18} />
                  </span>
                  <span className="services-overview-card-metric">
                    {service.metric}
                  </span>
                </div>
                <h2 className="services-overview-card-title">{service.title}</h2>
                <p className="services-overview-card-description">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="services-categories-section">
        <div className="services-categories-shell">
          {serviceCategories.map((category, categoryIndex) => {
            const CategoryIcon = categoryIconMap[category.title] || Sparkles;

            return (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ delay: categoryIndex * 0.05 }}
              className="services-category-panel"
            >
              <div className="services-category-header">
                <div className="services-category-copy">
                  <span className="services-category-eyebrow">
                    <CategoryIcon size={14} />
                    {category.title}
                  </span>
                  <h2 className="services-category-title">{category.title} services</h2>
                  <p className="services-category-description">{category.description}</p>
                </div>
              </div>

              <div className="services-category-grid">
                {category.sections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ delay: sectionIndex * 0.04 }}
                    className="services-category-card"
                  >
                    <h3 className="services-category-card-title">{section.name}</h3>
                    <div className="services-category-items">
                      {section.items.map((item) => (
                        <div key={item} className="services-category-item">
                          <CheckCircle2 size={18} className="services-category-item-icon" />
                          <p className="services-category-item-text">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            );
          })}
        </div>
      </section>

      <section className="services-cta-section">
        <div className="services-cta-panel">
          <div className="services-cta-layout">
            <div className="services-cta-copy">
              <span className="services-cta-eyebrow">Advisor Support</span>
              <h2 className="services-cta-title">
                Speak with DanAuto about a vehicle search, inspection, workshop visit, or fleet plan.
              </h2>
            </div>
            <Button to="/contact">Contact DanAuto</Button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Services;
