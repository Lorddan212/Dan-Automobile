import { motion } from "framer-motion";
import { ArrowLeft, Cookie, FileText, ShieldCheck } from "lucide-react";
import { Link, Navigate } from "react-router-dom";

const legalPages = {
  privacy: {
    icon: ShieldCheck,
    label: "Privacy",
    title: "Privacy at DanAuto",
    description:
      "We collect the details needed to respond to inquiries, schedule appointments, review vehicle needs, and support customers after delivery.",
    sections: [
      {
        title: "Information We Use",
        text:
          "Contact forms may include your name, email, phone number, preferred vehicle or service, appointment date, budget range, trade-in details, and message."
      },
      {
        title: "How We Use It",
        text:
          "Your details are used for advisor follow-up, appointment planning, inspection preparation, service coordination, documentation support, and relevant DanAuto updates."
      },
      {
        title: "Retention and Your Choices",
        text:
          "Inquiry records are kept only for reasonable sales, service, and compliance purposes. You can request correction or removal by contacting bookings@danauto.africa."
      }
    ]
  },
  terms: {
    icon: FileText,
    label: "Terms",
    title: "Website Terms",
    description:
      "The DanAuto website is built for browsing vehicle options, learning about services, and starting a conversation with our team.",
    sections: [
      {
        title: "Catalog Information",
        text:
          "Vehicle details, estimated prices, fuel types, mileage references, and specifications are presented for discovery only and must be confirmed before quotation or payment."
      },
      {
        title: "Inspections and Appointments",
        text:
          "Submitting a booking request does not guarantee vehicle availability, workshop space, inspection access, or a test drive until the DanAuto team confirms the date and details."
      },
      {
        title: "Payments and Third Parties",
        text:
          "Any purchase, leasing, insurance, financing, import, or workshop arrangement may involve third-party providers. Final terms should be reviewed before payment."
      }
    ]
  },
  cookies: {
    icon: Cookie,
    label: "Cookies",
    title: "Cookie Notice",
    description:
      "DanAuto keeps the browsing experience lightweight and uses browser features that help the site function properly.",
    sections: [
      {
        title: "Essential Behavior",
        text:
          "The app uses browser behavior for routing, animations, form state, and page navigation so visitors can browse vehicles and submit appointment requests."
      },
      {
        title: "Analytics",
        text:
          "If analytics are enabled, DanAuto should use them in aggregate to understand page performance, popular services, and visitor journeys without selling personal browsing data."
      },
      {
        title: "Control",
        text:
          "You can manage browser-level privacy, cache, and cookie preferences through your browser settings. Some essential behavior may be needed for the site to work correctly."
      }
    ]
  }
};

function Legal({ pageId }) {
  const page = legalPages[pageId];

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const Icon = page.icon;

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45 }}
      className="legal-page"
    >
      <div className="legal-shell">
        <Link to="/" className="legal-back-link">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="legal-header">
          <span className="legal-eyebrow">
            <Icon size={14} />
            {page.label}
          </span>
          <h1 className="legal-title">{page.title}</h1>
          <p className="legal-description">{page.description}</p>
        </div>

        <div className="legal-panel">
          {page.sections.map((section) => (
            <section key={section.title} className="legal-card">
              <h2 className="legal-card-title">{section.title}</h2>
              <p className="legal-card-text">{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </motion.main>
  );
}

export default Legal;
