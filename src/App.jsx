import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Cars = lazy(() => import("./pages/Cars"));
const CarDetails = lazy(() => import("./pages/CarDetails"));
const Contact = lazy(() => import("./pages/Contact"));

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function LegacyCarRedirect() {
  const { carId } = useParams();
  return <Navigate to={`/cars/${carId}`} replace />;
}

function App() {
  const location = useLocation();
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsBooting(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  if (isBooting) {
    return <Loader />;
  }

  return (
    <div className="site-shell min-h-screen bg-[#05070c] text-white">
      <ScrollManager />
      <Navbar />

      <Suspense fallback={<Loader compact />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:carId" element={<CarDetails />} />
            <Route path="/models" element={<Navigate to="/cars" replace />} />
            <Route path="/models/:carId" element={<LegacyCarRedirect />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
