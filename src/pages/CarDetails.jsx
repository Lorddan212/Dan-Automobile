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
      <main className="car-details-missing-page">
        <div className="car-details-empty">
          <p className="car-details-empty-eyebrow">Car Unavailable</p>
          <h1 className="car-details-empty-title">We could not find that vehicle profile.</h1>
          <p className="car-details-empty-description">
            The requested vehicle may have moved, sold, or is still being prepared for display.
          </p>
          <div className="car-details-empty-action">
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
      className="car-details-page"
    >
      <div className="car-details-shell">
        <Link to="/cars" className="car-details-back-link">
          <ArrowLeft size={16} />
          Back to cars
        </Link>

        <div className="car-details-grid">
          <div className="car-details-gallery-panel">
            <div className="car-details-gallery-stage">
              <img
                src={car.gallery[activeImage]}
                alt={car.name}
                className="car-details-gallery-image"
                loading="eager"
                decoding="async"
              />
              <div className="car-details-gallery-overlay" />

              <button
                type="button"
                onClick={previousImage}
                className="car-details-gallery-control car-details-gallery-control-prev"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="car-details-gallery-control car-details-gallery-control-next"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>

              <div className="car-details-gallery-copy">
                <span className="car-details-type-pill">
                  {car.type}
                </span>
                <h1 className="car-details-title">{car.name}</h1>
                <p className="car-details-description">{car.description}</p>
              </div>
            </div>

            <div className="car-details-thumbnails">
              {car.gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={[
                    "car-details-thumbnail",
                    index === activeImage
                      ? "car-details-thumbnail-active"
                      : "car-details-thumbnail-idle"
                  ].join(" ")}
                >
                  <img
                    src={image}
                    alt={`${car.name} view ${index + 1}`}
                    className="car-details-thumbnail-image"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="car-details-side">
            <div className="car-details-info-card">
              <div className="car-details-price-row">
                <div>
                  <p className="car-details-price-label">
                    <Banknote size={14} />
                    Starting Price
                  </p>
                  <p className="car-details-price-value">{formatNaira(car.price)}</p>
                </div>
                <div className="car-details-drivetrain-pill">{car.drivetrain}</div>
              </div>

              <div className="car-details-specs-grid">
                {car.specs.map((spec) => (
                  <div key={spec.label} className="car-details-spec-card">
                    <p className="car-details-spec-label">{spec.label}</p>
                    <p className="car-details-spec-value">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="car-details-info-card">
              <p className="car-details-card-eyebrow car-details-card-eyebrow-gold">
                <Sparkles size={14} />
                Feature Highlights
              </p>
              <div className="car-details-highlights">
                {car.highlights.map((highlight) => (
                  <div key={highlight} className="car-details-highlight-item">
                    <CheckCircle2 size={18} className="car-details-highlight-icon" />
                    <p className="car-details-highlight-text">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="car-details-info-card">
              <p className="car-details-card-eyebrow car-details-card-eyebrow-blue">
                <UserRoundCog size={14} />
                DanAuto Advisor
              </p>
              <p className="car-details-concierge-text">
                Book a guided consultation to compare trims, check availability,
                arrange inspection, and review realistic ownership costs.
              </p>
              <div className="car-details-actions">
                <Button to="/contact" icon={CalendarClock} className="car-details-action-button">
                  Request Appointment
                </Button>
                <Button to="/cars" variant="secondary" className="car-details-action-button">
                  Compare Vehicles
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
