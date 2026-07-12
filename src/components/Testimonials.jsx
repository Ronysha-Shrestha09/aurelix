import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, fadeUp } from "../animations/variants";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ram Bahadur Poudel",
      role: "Collector",
      review:
        "Aurelix exceeded my expectations. The craftsmanship and attention to detail are simply outstanding.",
    },
    {
      name: "Mahendra Ranta Shah",
      role: "Entrepreneur",
      review:
        "Elegant, timeless, and incredibly comfortable. I receive compliments every time I wear it.",
    },
    {
      name: "Sita Devi Shrestha",
      role: "Business Executive",
      review:
        "The perfect combination of luxury and precision. Worth every penny.",
    },
  ];

  return (
    <motion.section
      id="reviews"
      className="max-w-7xl mx-auto px-10 lg:px-16 py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        className="text-center mb-16"
      >
        <p className="text-[#D4AF37] uppercase tracking-[6px] mb-3">
          Testimonials
        </p>

        <h2 className="font-serif text-5xl font-bold">
          What Our Clients Say
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Trusted by watch enthusiasts and collectors around the world.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{ duration: 0.35 }}
            className="group bg-[#111111] rounded-3xl border border-[#D4AF37]/10 p-8 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          >
            {/* Stars */}
            <motion.div
              className="flex text-[#D4AF37] mb-6"
              whileHover={{ scale: 1.05 }}
            >
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="currentColor"
                />
              ))}
            </motion.div>

            {/* Review */}
            <p className="text-gray-300 leading-8 italic">
              "{item.review}"
            </p>

            {/* Client */}
            <motion.div
              className="mt-8"
              whileHover={{ x: 3 }}
            >
              <h3 className="font-semibold text-xl">
                {item.name}
              </h3>

              <p className="text-[#D4AF37] text-sm mt-1">
                {item.role}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}