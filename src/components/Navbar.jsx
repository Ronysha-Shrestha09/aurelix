import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Collection", href: "#collection" },
    { name: "Story", href: "#story" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-[0.35em] text-[#D4AF37] cursor-pointer"
        >
          AURELIX
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 lg:gap-10 text-sm uppercase tracking-widest">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <a
                href={item.href}
                className="transition-colors duration-300 group-hover:text-[#D4AF37]"
              >
                {item.name}
              </a>

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Explore Button */}
        <motion.a
          href="#collection"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="hidden md:block ml-4 lg:ml-8 shrink-0 whitespace-nowrap px-5 py-2 border border-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
        >
          Explore
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-lg border-t border-[#D4AF37]/20"
        >
          <div className="flex flex-col items-center py-6 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="uppercase tracking-widest hover:text-[#D4AF37] transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#collection"
              onClick={() => setMenuOpen(false)}
              className="border border-[#D4AF37] px-5 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition"
            >
              Explore
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;