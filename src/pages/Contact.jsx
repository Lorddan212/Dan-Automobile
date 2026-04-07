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
      className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-luxury sm:p-10">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-luxury-gold">
              <Send size={14} />
              Contact DanAuto
            </span>
            <h1 className="mt-4 max-w-xl font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl">
              Book a premium DanAuto appointment.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-8 text-white/60">
              Schedule a test drive, request a private showroom session, or speak to
              our team about custom orders and corporate fleet solutions.
            </p>

            <div className="mt-10 grid gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="rounded-[28px] border border-white/10 bg-black/20 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="icon-shell mt-1">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.26em] text-white/42">
                          {card.title}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-white/70">{card.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-[28px] border border-luxury-blue/20 bg-luxury-blue/10 p-5">
              <div className="flex items-start gap-4">
                <span className="icon-shell mt-1">
                  <CalendarClock size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-luxury-blue">
                    White-Glove Experience
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/68">
                    Every DanAuto booking includes guided model comparison, AI feature
                    walkthrough, and tailored recommendations for your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 shadow-luxury sm:p-10">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
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

              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="Phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="+234 800 000 2026"
                />
                <div>
                  <label className="field-label" htmlFor="interest">
                    Preferred Car
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formState.interest}
                    onChange={handleChange}
                    className="field-input"
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

              <div>
                <label className="field-label" htmlFor="message">
                  How can DanAuto help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  className="field-input resize-none"
                  placeholder="Tell us the model, service, or showroom experience you’re interested in."
                />
                {errors.message ? <p className="field-error">{errors.message}</p> : null}
              </div>

              {isSubmitted ? (
                <div className="rounded-[24px] border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                  Your request has been received. The DanAuto concierge team will contact you shortly.
                </div>
              ) : null}

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full justify-center"
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
    <div>
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
