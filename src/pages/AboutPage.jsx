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
      className="pb-12 pt-20 sm:pt-24"
    >
      <section className="relative overflow-hidden">
        <div className="relative h-[55vh] min-h-[24rem] w-full lg:h-[75vh]">
          <AnimatePresence mode="wait">
            <motion.img
              key={aboutSlides[activeSlide].image}
              src={aboutSlides[activeSlide].image}
              alt={aboutSlides[activeSlide].title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-full w-full rounded-b-[40px] object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </AnimatePresence>

          <div className="absolute inset-0 rounded-b-[40px] bg-[linear-gradient(180deg,rgba(5,7,12,0.12),rgba(5,7,12,0.44)_40%,rgba(5,7,12,0.88))]" />

          <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8 lg:pb-10">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-4xl">
                <p className="inline-flex max-w-full flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-luxury-blue sm:text-xs sm:tracking-[0.26em] lg:text-sm lg:tracking-[0.32em]">
                  <Building2 size={16} className="shrink-0 lg:h-[18px] lg:w-[18px]" />
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
                    <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-luxury-gold">
                      {aboutSlides[activeSlide].eyebrow}
                    </p>
                    <h1 className="mt-3 max-w-4xl font-display text-3xl uppercase leading-[1] text-white sm:text-4xl lg:text-5xl">
                      <span className="block text-white [text-shadow:0_10px_30px_rgba(0,0,0,0.4)]">
                        {aboutSlides[activeSlide].title.split(" ").slice(0, -2).join(" ")}
                      </span>
                      <span className="mt-2 block bg-gradient-to-r from-luxury-blue via-white to-luxury-gold bg-clip-text text-transparent [text-shadow:0_10px_30px_rgba(9,78,120,0.22)]">
                        {aboutSlides[activeSlide].title.split(" ").slice(-2).join(" ")}
                      </span>
                    </h1>
                    <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg sm:leading-9">
                      {aboutSlides[activeSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-6 flex gap-2">
                {aboutSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                    className={[
                      "h-2.5 rounded-full transition",
                      activeSlide === index
                        ? "w-10 bg-luxury-gold"
                        : "w-2.5 bg-white/40 hover:bg-white/60"
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-10 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-blue">
                <Sparkles size={14} />
                Brand Story
              </span>
              <h2 className="mt-4 max-w-4xl font-display text-3xl uppercase leading-[0.95] text-white sm:text-5xl">
                {companyName} is designing a more thoughtful future for premium automobiles.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-9 text-white/72">
                {companyName} was created around a clear belief: luxury mobility should
                feel intelligent, elegant, and deeply human. We combine futuristic
                aesthetics, calm digital experiences, and advanced vehicle technology
                to create automobiles that do more than move people. They express
                confidence, reduce friction, and bring modern prestige to every journey.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-9 text-white/68">
                Our approach is not built on noise or gimmicks. It is built on balance:
                strong design without excess, AI without confusion, and performance
                without compromise. That is how {companyName} aims to feel both
                international in standard and relevant to the roads, ambitions, and
                lifestyles of a new generation of drivers.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-9 text-white/64">
                Beyond manufacturing vehicles, {companyName} is shaping an ownership
                experience built around confidence. We think about the full rhythm of
                modern mobility: the emotion of first sight, the intelligence of the
                cockpit, the comfort of every seat, the trust built through safety, and
                the seamless support that continues long after delivery. That wider view
                is what helps us create a brand that feels aspirational, useful, and
                enduring at the same time.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {missionVision.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-luxury"
                  >
                    <div className="flex items-center gap-4">
                      <span className="icon-shell">
                        <Icon size={18} />
                      </span>
                      <p className="font-display text-2xl uppercase tracking-[0.14em] text-luxury-gold sm:text-3xl">
                        {item.title}
                      </p>
                    </div>
                    <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-4">
          {brandStats.map((stat, index) => {
            const Icon = statIcons[index] || Sparkles;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="glass-panel rounded-[28px] p-6"
              >
                <span className="icon-shell">
                  <Icon size={18} />
                </span>
                <p className="mt-5 font-display text-4xl uppercase text-white">{stat.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/45">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3">
            {brandPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-luxury"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-luxury-gold">
                  Brand Pillar
                </p>
                <h2 className="mt-4 font-display text-3xl uppercase text-white">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/60">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-8 shadow-luxury sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-blue">
                <Clock3 size={20} />
                Timeline
              </span>
              <h2 className="mt-4 font-display text-4xl uppercase text-white sm:text-5xl">
                The {companyName} story so far.
              </h2>
            </div>
            <Link
              to="/cars"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-luxury-gold"
            >
              Explore Cars
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-black/20 p-6"
              >
                <p className="font-display text-3xl uppercase text-luxury-gold">{item.year}</p>
                <h3 className="mt-4 font-display text-2xl uppercase text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default AboutPage;
