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
      className="pb-12 pt-28 sm:pt-32"
    >
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-2 py-10 sm:px-0 sm:py-12">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-blue">
            <GalleryVertical size={14} />
            DanAuto Gallery
          </span>
          <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl">
            A visual archive of DanAuto design, cabins, performance, and experience.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/62">
            Explore the future-facing surfaces, lighting moods, and premium moments
            that define the DanAuto brand.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05 }}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-luxury"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.08),rgba(5,7,12,0.8))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-luxury-gold backdrop-blur-xl">
                    <ImageIcon size={12} />
                    {item.category}
                  </span>
                  <h2 className="mt-4 font-display text-3xl uppercase text-white">
                    {item.title}
                  </h2>
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
