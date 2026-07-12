import { motion } from "framer-motion";
import { containerVariants, fadeUp } from "../animations/variants";

export default function CTA() {
  return (
    <motion.section
      id="contact"
      className="max-w-7xl mx-auto px-8 lg:px-16 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={fadeUp}
        className="bg-[#111111] rounded-[40px] border border-[#D4AF37]/20 p-14 text-center"
      >
        <motion.p
          variants={fadeUp}
          className="text-[#D4AF37] uppercase tracking-[6px] mb-4"
        >
          Timeless Luxury
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-serif text-4xl md:text-6xl font-bold leading-tight"
        >
          Discover Your <br />
          Perfect Timepiece
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 mt-8 max-w-2xl mx-auto leading-8"
        >
          Explore our exclusive collection of handcrafted luxury watches
          designed to elevate every moment with precision and elegance.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <motion.button
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold"
          >
            Shop Collection
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.04,
              y: -3,
              backgroundColor: "#D4AF37",
              color: "#000",
            }}
            whileTap={{ scale: 0.97 }}
            className="border border-[#D4AF37] px-8 py-4 rounded-full"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}