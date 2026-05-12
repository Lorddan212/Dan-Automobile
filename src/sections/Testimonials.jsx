import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareQuote, Star } from "lucide-react";
import { testimonials } from "../utils/data";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="testimonials-header"
        >
          <span className="testimonials-eyebrow">
            <MessageSquareQuote size={14} />
            Testimonials
          </span>
          <h2 className="testimonials-title">What recent clients are saying.</h2>
        </motion.div>

        <div className="testimonials-card">
          <div className="testimonials-card-glow" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="testimonials-slide"
            >
              <div className="testimonials-stars">
                {[0, 1, 2, 3, 4].map((item) => (
                  <Star key={item} size={18} className="testimonials-star" />
                ))}
              </div>

              <p className="testimonials-quote">
                "{activeTestimonial.quote}"
              </p>

              <div className="testimonials-author">
                <p className="testimonials-author-name">{activeTestimonial.name}</p>
                <p className="testimonials-author-role">{activeTestimonial.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials-dots">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  "testimonials-dot",
                  index === activeIndex ? "testimonials-dot-active" : "testimonials-dot-idle"
                ].join(" ")}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
