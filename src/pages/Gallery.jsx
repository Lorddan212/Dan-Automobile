import { motion } from "framer-motion";
import { GalleryVertical, Image as ImageIcon } from "lucide-react";
import { galleryItems } from "../utils/data";

function Gallery() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
      className="gallery-page"
    >
      <section className="gallery-hero-section">
        <div className="gallery-hero-shell">
          <span className="gallery-eyebrow">
            <GalleryVertical size={14} />
            DanAuto Gallery
          </span>
          <h1 className="gallery-title">
            A closer look at the vehicles, interiors, workshop checks, and delivery moments clients ask about
          </h1>
          <p className="gallery-description">
            The gallery gives buyers a realistic sense of showroom visits,
            inspection details, cabin finishes, delivery preparation, and vehicle
            condition before an appointment.
          </p>
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
