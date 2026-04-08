import { motion } from "framer-motion";

function Loader({ compact = false }) {
  if (compact) {
    return (
      <div className="loader-compact">
        <div className="loader-compact-shell">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="loader-compact-spinner"
          />
          <p className="loader-compact-text">Loading DanAuto</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loader-screen"
    >
      <div className="loader-inner">
        <div className="loader-glow" />
        <motion.div
          animate={{
            backgroundImage: [
              "linear-gradient(120deg, #c9a45c 0%, #7dd3fc 100%)",
              "linear-gradient(120deg, #7dd3fc 0%, #c9a45c 100%)",
              "linear-gradient(120deg, #c9a45c 0%, #7dd3fc 100%)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="loader-wordmark"
        >
          DanAuto
        </motion.div>

        <div className="loader-progress-track">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="loader-progress-bar"
          />
        </div>

        <p className="loader-caption">Initializing AI luxury experience</p>
      </div>
    </motion.div>
  );
}

export default Loader;
