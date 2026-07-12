import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StoryWatch from "../assets/images/story-watch.png";

export default function Parallax() {
  const ref = useRef(null);

  // Tracks scroll progress as this section moves through the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Background image moves slower than the scroll (classic parallax)
  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // Foreground text moves slightly the opposite way for depth
  const yText = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  // Fades text in as it enters/exits the section
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background layer */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 scale-125"
      >
        <img
          src={StoryWatch}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Foreground content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 text-center px-6"
      >
        <p className="text-[#D4AF37] uppercase tracking-[6px] mb-4">
          Precision In Motion
        </p>

        <h2 className="font-serif text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
          Every Second Tells A Story
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto leading-8">
          Crafted for those who move through life with purpose,
          precision, and quiet confidence.
        </p>
      </motion.div>
    </section>
  );
}