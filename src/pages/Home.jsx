import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, CalendarClock, CarFront, ShieldCheck, Sparkles } from "lucide-react";
import Hero from "../components/Hero";
import Button from "../components/Button";
import About from "../sections/About";
import Showcase from "../sections/Showcase";
import Technology from "../sections/Technology";
import Testimonials from "../sections/Testimonials";
import { cars, services } from "../utils/data";

const homeHighlights = [
  {
    title: "Verified Listings",
    description: "Recommended vehicles are reviewed for condition, documents, mileage, and ownership history.",
    icon: ShieldCheck
  },
  {
    title: "Broad Vehicle Access",
    description: "Compare sedans, SUVs, pickups, EVs, family vans, and executive vehicles across trusted brands.",
    icon: CarFront
  },
  {
    title: "Ownership Support",
    description: "Get help with inspection, payment planning, insurance, registration, delivery, and workshop care.",
    icon: Sparkles
  }
];

function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
      className="home-page"
    >
      <Hero />

      <section className="home-highlights-section">
        <div className="home-highlights-grid">
          {homeHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="home-highlight-card"
              >
                <span className="icon-shell">
                  <Icon size={18} />
                </span>
                <h3 className="home-highlight-title">{item.title}</h3>
                <p className="home-highlight-description">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Showcase
        items={cars.slice(0, 6)}
        title="Popular premium requests"
        eyebrow="Vehicle Shortlist"
        description="A closer look at the kinds of vehicles clients often ask us to source, inspect, price, and deliver."
        sectionId="featured-cars"
        showAllLink
      />

      <Technology />

      <section className="home-services-section">
        <div className="home-services-panel">
          <div className="home-services-header">
            <div className="home-services-copy">
              <span className="home-services-eyebrow">
                <BrainCircuit size={14} />
                Services
              </span>
              <h2 className="home-services-title">
                DanAuto supports the full ownership process, from first search to scheduled servicing.
              </h2>
            </div>
            <Button to="/services" icon={ArrowRight}>
              View All Services
            </Button>
          </div>

          <div className="home-services-grid">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="home-service-card"
              >
                <div className="home-service-card-header">
                  <span className="icon-shell">
                    <BrainCircuit size={18} />
                  </span>
                  <span className="home-service-card-metric">
                    {service.metric}
                  </span>
                </div>
                <h3 className="home-service-card-title">{service.title}</h3>
                <p className="home-service-card-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Testimonials />

      <section className="home-cta-section">
        <div className="home-cta-panel">
          <div className="home-cta-layout">
            <div className="home-cta-copy">
              <span className="home-cta-eyebrow">
                <CalendarClock size={14} />
                Booking
              </span>
              <h2 className="home-cta-title">
                Book a showroom, sourcing, or service appointment
              </h2>
              <p className="home-cta-description">
                Tell us your budget, preferred brands, delivery timeline, and service
                needs. A DanAuto advisor will confirm availability and next steps.
              </p>
            </div>

            <Button to="/contact" icon={ArrowRight}>
              Book Appointment
            </Button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Home;
