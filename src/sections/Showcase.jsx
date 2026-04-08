import { motion } from "framer-motion";
import { ArrowRight, CarFront } from "lucide-react";
import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import { cars } from "../utils/data";

function Showcase({
  items = cars,
  title = "DanAuto Collection",
  eyebrow = "Curated Cars",
  description = "Explore the DanAuto lineup across premium body types, each shaped with AI-led safety, sculpted design, and refined electric performance.",
  sectionId = "showcase",
  showAllLink = false
}) {
  return (
    <section id={sectionId} className="showcase-section">
      <div className="showcase-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="showcase-header"
        >
          <div className="showcase-copy">
            <span className="showcase-eyebrow">
              <CarFront size={25} />
              {eyebrow}
            </span>
            <h2 className="showcase-title">{title}</h2>
            <p className="showcase-description">{description}</p>
          </div>

          {showAllLink ? (
            <Link
              to="/cars"
              className="showcase-link"
            >
              View All Cars
              <ArrowRight size={16} />
            </Link>
          ) : null}
        </motion.div>

        <div className="showcase-grid">
          {items.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <CarCard car={car} priority={index === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
