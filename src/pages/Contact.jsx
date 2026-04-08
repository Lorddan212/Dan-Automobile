import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarClock, Mail, MapPin, Phone, Send } from "lucide-react";
import Button from "../components/Button";
import { cars } from "../utils/data";

const initialState = {
  name: "",
  email: "",
  phone: "",
  interest: cars[0].name,
  preferredDate: "",
  message: ""
};

function Contact() {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactCards = useMemo(
    () => [
      {
        icon: MapPin,
        title: "Flagship Experience Centre",
        text: "12 Meridian Avenue, Victoria Island, Lagos"
      },
      {
        icon: Phone,
        title: "DanAuto Concierge",
        text: "+234 (0) 800 000 2026"
      },
      {
        icon: Mail,
        title: "Email",
        text: "concierge@danauto.africa"
      }
    ],
    []
  );

  const validateForm = () => {
    const nextErrors = {};

    if (!formState.name.trim()) {
      nextErrors.name = "Your name is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formState.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    }

    if (!formState.preferredDate) {
      nextErrors.preferredDate = "Choose a preferred date.";
    }

    if (formState.message.trim().length < 10) {
      nextErrors.message = "Tell us a little more about what you're looking for.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setIsSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState(initialState);
    setErrors({});
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
      className="contact-page"
    >
      <div className="contact-shell">
        <div className="contact-grid">
          <div className="contact-info-panel">
            <span className="contact-eyebrow">
              <Send size={14} />
              Contact DanAuto
            </span>
            <h1 className="contact-title">
              Book a premium DanAuto appointment.
            </h1>
            <p className="contact-description">
              Schedule a test drive, request a private showroom session, or speak to
              our team about custom orders and corporate fleet solutions.
            </p>

            <div className="contact-cards">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div key={card.title} className="contact-card">
                    <div className="contact-card-shell">
                      <span className="contact-card-icon">
                        <Icon size={18} />
                      </span>
                      <div className="contact-card-copy">
                        <p className="contact-card-title">{card.title}</p>
                        <p className="contact-card-text">{card.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="contact-experience-card">
              <div className="contact-experience-shell">
                <span className="contact-experience-icon">
                  <CalendarClock size={18} />
                </span>
                <div className="contact-experience-copy">
                  <p className="contact-experience-title">White-Glove Experience</p>
                  <p className="contact-experience-text">
                    Every DanAuto booking includes guided model comparison, AI feature
                    walkthrough, and tailored recommendations for your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-panel">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <Field
                  label="Full Name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Aisha Bello"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="you@example.com"
                />
              </div>

              <div className="contact-form-row">
                <Field
                  label="Phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="+234 800 000 2026"
                />
                <div className="contact-field-group">
                  <label className="field-label" htmlFor="interest">
                    Preferred Car
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formState.interest}
                    onChange={handleChange}
                    className="field-input contact-select"
                  >
                    {cars.map((car) => (
                      <option key={car.id}>{car.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Field
                label="Preferred Date"
                name="preferredDate"
                type="date"
                value={formState.preferredDate}
                onChange={handleChange}
                error={errors.preferredDate}
              />

              <div className="contact-field-group">
                <label className="field-label" htmlFor="message">
                  How can DanAuto help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  className="field-input contact-textarea"
                  placeholder="Tell us the model, service, or showroom experience you’re interested in."
                />
                {errors.message ? <p className="field-error">{errors.message}</p> : null}
              </div>

              {isSubmitted ? (
                <div className="contact-success">
                  Your request has been received. The DanAuto concierge team will contact you shortly.
                </div>
              ) : null}

              <div className="contact-submit">
                <Button
                  type="submit"
                  className="contact-submit-button"
                  icon={CalendarClock}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Request" : "Book DanAuto Appointment"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.main>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder = ""
}) {
  return (
    <div className="contact-field-group">
      <label className="field-label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="field-input"
        placeholder={placeholder}
      />
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  );
}

export default Contact;
