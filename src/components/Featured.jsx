import Watch1 from "../assets/images/watch1.png";
import Watch2 from "../assets/images/watch2.png";
import Watch3 from "../assets/images/watch3.png";

import { motion } from "framer-motion";
import { containerVariants, fadeUp } from "../animations/variants";

export default function Featured() {
  const watches = [
    {
      id: 1,
      name: "Heritage Collection",
      description: "Classic elegance with Swiss precision.",
      price: "$2,499",
      image: Watch1,
    },
    {
      id: 2,
      name: "Midnight Edition",
      description: "Bold design for modern professionals.",
      price: "$3,199",
      image: Watch2,
    },
    {
      id: 3,
      name: "Royal Gold",
      description: "Luxury craftsmanship in every detail.",
      price: "$4,299",
      image: Watch3,
    },
  ];

  return (
    <motion.section
      id="collection"
      className="max-w-7xl mx-auto px-8 lg:px-16 py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >

      <motion.div
        variants={fadeUp}
        className="text-center mb-16"
      >
        <p className="text-[#D4AF37] uppercase tracking-[6px] mb-3">
          Collection
        </p>

        <h2 className="font-serif text-5xl font-bold">
          Featured Collection
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Explore our signature timepieces designed with precision,
          elegance, and timeless craftsmanship.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {watches.map((watch) => (
          <motion.div
            key={watch.id}
            variants={fadeUp}
            whileHover={{
              y: -15,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
            }}
            className="bg-[#111111] rounded-3xl p-8 border border-[#D4AF37]/10 hover:border-[#D4AF37]/50 overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={watch.image}
                alt={watch.name}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </motion.div>

            <h3 className="font-serif text-2xl mt-8">
              {watch.name}
            </h3>

            <p className="text-gray-400 mt-3 text-sm leading-6">
              {watch.description}
            </p>

            <p className="text-[#D4AF37] text-xl mt-3">
              {watch.price}
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 border border-[#D4AF37] px-5 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition"
            >
              View Details
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}