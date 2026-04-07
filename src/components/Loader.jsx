import { motion } from "framer-motion";

function Loader({ compact = false }) {
  if (compact) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="h-5 w-5 rounded-full border-2 border-luxury-gold/30 border-t-luxury-gold"
          />
          <p className="text-xs uppercase tracking-[0.32em] text-white/60">
            Loading DanAuto
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#04060b]"
    >
      <div className="relative text-center">
        <div className="absolute inset-0 rounded-full bg-luxury-blue/15 blur-3xl" />
        <motion.div
          animate={{
            backgroundImage: [
              "linear-gradient(120deg, #c9a45c 0%, #7dd3fc 100%)",
              "linear-gradient(120deg, #7dd3fc 0%, #c9a45c 100%)",
              "linear-gradient(120deg, #c9a45c 0%, #7dd3fc 100%)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="relative bg-clip-text font-display text-4xl uppercase tracking-[0.55em] text-transparent sm:text-5xl"
        >
          DanAuto
        </motion.div>

        <div className="mx-auto mt-5 h-px w-32 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-luxury-gold to-transparent"
          />
        </div>

        <p className="mt-5 text-xs uppercase tracking-[0.32em] text-white/45">
          Initializing AI luxury experience
        </p>
      </div>
    </motion.div>
  );
}

export default Loader;
