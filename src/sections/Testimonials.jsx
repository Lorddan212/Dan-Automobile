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
    <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-blue">
            <MessageSquareQuote size={14} />
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-4xl uppercase text-white sm:text-5xl">
            What premium drivers are saying.
          </h2>
        </motion.div>

        <div className="relative mt-12 overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-luxury backdrop-blur-2xl sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,164,92,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_35%,rgba(125,211,252,0.08))]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <div className="flex justify-center gap-2">
                {[0, 1, 2, 3, 4].map((item) => (
                  <Star key={item} size={18} className="fill-luxury-gold text-luxury-gold" />
                ))}
              </div>

              <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-white/88 sm:text-2xl">
                “{activeTestimonial.quote}”
              </p>

              <div className="mt-8 text-center">
                <p className="font-display text-2xl uppercase text-white">
                  {activeTestimonial.name}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.28em] text-white/45">
                  {activeTestimonial.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative mt-8 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  "h-2 rounded-full transition-all duration-300",
                  index === activeIndex ? "w-10 bg-luxury-gold" : "w-2 bg-white/25"
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
