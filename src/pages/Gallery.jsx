import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GalleryVertical, Image as ImageIcon } from "lucide-react";
import { galleryItems } from "../utils/data";

function Gallery() {
  const heroSlides = useMemo(() => galleryItems.slice(0, 3), []);
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    heroSlides.forEach((slide) => {
      const image = new window.Image();
      image.src = slide.image;
    });
  }, [heroSlides]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
      className="gallery-page"
    >
      <section className="gallery-hero-section">
        <div className="gallery-hero-stage" aria-label="Gallery highlights">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide.id}
              src={currentSlide.image}
              alt={currentSlide.title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="gallery-hero-image"
              loading="eager"
              decoding="async"
            />
          </AnimatePresence>

          <div className="gallery-hero-overlay" />

          <div className="gallery-hero-content">
            <div className="gallery-hero-shell">
              <div className="gallery-hero-copy">
                <span className="gallery-eyebrow">
                  <GalleryVertical size={14} />
                  DanAuto Gallery
                </span>
                <h1 className="gallery-title">
                  <span className="gallery-title-line">Vehicle interiors,</span>
                  <span className="gallery-title-line">inspection details,</span>
                  <span className="gallery-title-line-accent">delivery moments.</span>
                </h1>
                <p className="gallery-description">
                  <span className="gallery-description-line">Showroom visits, cabin finishes,</span>
                  <span className="gallery-description-line">inspection details, and delivery prep.</span>
                  <span className="gallery-description-line">Vehicle condition before an appointment.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05 }}
              className="gallery-card"
            >
              <div className="gallery-card-media">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-card-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="gallery-card-overlay" />
                <div className="gallery-card-content">
                  <span className="gallery-card-tag">
                    <ImageIcon size={12} />
                    {item.category}
                  </span>
                  <h2 className="gallery-card-title">{item.title}</h2>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export default Gallery;
