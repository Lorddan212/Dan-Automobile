import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Banknote, CalendarClock, CheckCircle2, ChevronLeft, ChevronRight, Sparkles, UserRoundCog } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import { formatNaira, getCarById } from "../utils/data";

function CarDetails() {
  const { carId } = useParams();
  const car = getCarById(carId);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [carId]);

  if (!car) {
    return (
      <main className="px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[36px] border border-white/10 bg-white/[0.04] p-10 text-center shadow-luxury">
          <p className="text-xs uppercase tracking-[0.35em] text-luxury-gold">
            Car Unavailable
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase text-white">
            We couldn’t find that DanAuto model.
          </h1>
          <p className="mt-4 text-white/60">
            The requested car may have moved or is still being prepared for display.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/cars">Return to Cars</Button>
          </div>
        </div>
      </main>
    );
  }

  const previousImage = () =>
    setActiveImage((current) => (current - 1 + car.gallery.length) % car.gallery.length);
  const nextImage = () =>
    setActiveImage((current) => (current + 1) % car.gallery.length);

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
      className="overflow-x-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32"
    >
      <div className="mx-auto max-w-7xl">
        <Link
          to="/cars"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/55 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to cars
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-3 shadow-luxury sm:p-5">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10">
              <img
                src={car.gallery[activeImage]}
                alt={car.name}
                className="h-[20rem] w-full object-cover object-center sm:h-[30rem] lg:h-[36rem]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,12,0.12),rgba(5,7,12,0.68))]" />

              <button
                type="button"
                onClick={previousImage}
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white backdrop-blur-xl transition hover:bg-black/55 sm:left-4 sm:h-11 sm:w-11"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white backdrop-blur-xl transition hover:bg-black/55 sm:right-4 sm:h-11 sm:w-11"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                <span className="inline-flex max-w-full rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-luxury-blue backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.28em]">
                  {car.type}
                </span>
                <h1 className="mt-4 break-words font-display text-3xl uppercase text-white sm:text-5xl">
                  {car.name}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/68 sm:leading-7">
                  {car.description}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {car.gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={[
                    "overflow-hidden rounded-[22px] border transition",
                    index === activeImage
                      ? "border-luxury-gold"
                      : "border-white/10 hover:border-white/20"
                  ].join(" ")}
                >
                  <img
                    src={image}
                    alt={`${car.name} view ${index + 1}`}
                    className="h-24 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-luxury">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/45">
                    <Banknote size={14} />
                    Starting Price
                  </p>
                  <p className="mt-3 break-words font-display text-3xl uppercase text-white sm:text-4xl">
                    {formatNaira(car.price)}
                  </p>
                </div>
                <div className="inline-flex max-w-full rounded-full border border-luxury-blue/20 bg-luxury-blue/10 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-luxury-blue sm:text-xs sm:tracking-[0.26em]">
                  {car.drivetrain}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {car.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-[24px] border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                      {spec.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-luxury">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-luxury-gold">
                <Sparkles size={14} />
                Feature Highlights
              </p>
              <div className="mt-5 space-y-4">
                {car.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-1 text-luxury-gold" />
                    <p className="text-sm leading-7 text-white/62">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-luxury">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-luxury-blue">
                <UserRoundCog size={14} />
                DanAuto Concierge
              </p>
              <p className="mt-4 text-sm leading-7 text-white/62">
                Book a guided vehicle consultation to compare trims, review features,
                and schedule a private drive with the DanAuto experience team.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button to="/contact" icon={CalendarClock} className="w-full justify-center sm:w-auto">
                  Reserve a Test Drive
                </Button>
                <Button to="/cars" variant="secondary" className="w-full justify-center sm:w-auto">
                  Compare Cars
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

export default CarDetails;
