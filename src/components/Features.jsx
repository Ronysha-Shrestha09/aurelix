import { Gem, ShieldCheck, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, fadeUp } from "../animations/variants";

export default function Features() {
  const features = [
    {
      icon: <Gem size={40} />,
      title: "Premium Craftsmanship",
      description:
        "Every Aurelix watch is handcrafted with exceptional attention to detail.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "5-Year Warranty",
      description:
        "Built with premium materials and backed by our international warranty.",
    },
    {
      icon: <Clock3 size={40} />,
      title: "Swiss Precision",
      description:
        "Engineered for accuracy with reliable automatic and quartz movements.",
    },
  ];

  return (
    <motion.section
      id="features"
      className="max-w-7xl mx-auto px-8 lg:px-16 py-24"
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
          Why Choose Us
        </p>

        <h2 className="font-serif text-5xl font-bold">
          Why Choose Aurelix
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
          Designed for those who value timeless elegance, precision,
          and uncompromising quality.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{ duration: 0.35 }}
            className="group bg-[#111111] border border-[#D4AF37]/10 rounded-3xl p-10 text-center hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          >
            {/* Icon */}
            <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.1,
              }}
              transition={{ duration: 0.3 }}
              className="flex justify-center text-[#D4AF37] mb-6"
            >
              {feature.icon}
            </motion.div>

            {/* Title */}
            <h3 className="font-serif text-2xl mb-4">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-7">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}