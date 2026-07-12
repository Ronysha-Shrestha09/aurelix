import StoryWatch from "../assets/images/story-watch.jpg";
import { motion } from "framer-motion";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  containerVariants,
} from "../animations/variants";

export default function Story() {
  return (
    <motion.section
      id="story"
      className="max-w-7xl mx-auto px-8 lg:px-16 py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="grid lg:grid-cols-2 gap-24 items-center">

        {/* Left Side */}
        <motion.div
          variants={fadeLeft}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              rotate: -1,
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={StoryWatch}
              alt="Luxury Watch"
              className="w-full max-w-[400px] rounded-3xl shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div variants={containerVariants}>

          <motion.p
            variants={fadeUp}
            className="text-[#D4AF37] uppercase tracking-[6px] mb-4"
          >
            Our Story
          </motion.p>

          <motion.h2
            variants={fadeRight}
            className="font-serif text-5xl font-bold leading-tight mb-8"
          >
            Crafted For Those <br /> Who Value Time
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 leading-8 mb-6"
          >
            At Aurelix, every watch is a statement of elegance,
            precision, and timeless craftsmanship.
            Inspired by Swiss engineering and modern luxury,
            our collections are designed for those who appreciate
            excellence in every detail.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 leading-8 mb-10"
          >
            From carefully selected materials to meticulous finishing,
            every timepiece is created to become a lifelong companion,
            blending sophisticated design with unmatched reliability.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{
              scale: 1.03,
              y: -3,
              backgroundColor: "#D4AF37",
              color: "#000",
            }}
            whileTap={{ scale: 0.97 }}
            className="border border-[#D4AF37] px-8 py-3 rounded-full"
          >
            Discover Our Story
          </motion.button>

        </motion.div>

      </div>
    </motion.section>
  );
}