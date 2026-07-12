import HeroWatch from "../assets/images/hero-watch.png";
import { motion } from "framer-motion";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  containerVariants,
} from "../animations/variants";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pt-32 pb-24"
    >
      <div className="grid lg:grid-cols-2 items-center gap-12">

        {/* Left Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#D4AF37] uppercase tracking-[6px] mb-4"
          >
            Luxury Watches
          </motion.p>

          <motion.h1
            variants={fadeLeft}
            className="font-serif text-5xl md:text-6xl font-bold leading-tight"
          >
            TIME <br />
            CRAFTED FOR <br />
            LEGENDS
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 text-lg mt-8 max-w-md leading-8"
          >
            Experience timeless craftsmanship where precision meets luxury.
            Every second deserves elegance.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#D4AF37] text-black px-7 py-3 rounded-full font-semibold"
            >
              Explore Collection
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
                backgroundColor: "#D4AF37",
                color: "#000",
              }}
              whileTap={{ scale: 0.96 }}
              className="border border-[#D4AF37] px-7 py-3 rounded-full"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center"
        >
          <div className="relative">

            {/* Animated Gold Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-3xl scale-125"
            />

            {/* Circle */}
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border border-[#D4AF37]/30 overflow-hidden flex items-center justify-center">

              <motion.img
                src={HeroWatch}
                alt="Luxury Rolex"
                className="w-full h-full object-cover"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                }}
              />

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}