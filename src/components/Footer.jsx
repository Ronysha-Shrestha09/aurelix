import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/10 mt-12">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="font-serif text-3xl font-bold">
              AURELIX
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Timeless craftsmanship. Modern luxury.
              Designed for those who value every second.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[#D4AF37] cursor-pointer">Home</li>
              <li className="hover:text-[#D4AF37] cursor-pointer">Collection</li>
              <li className="hover:text-[#D4AF37] cursor-pointer">About</li>
              <li className="hover:text-[#D4AF37] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-xl mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4 text-[#D4AF37] text-2xl">
              <FaInstagram className="cursor-pointer hover:scale-110 transition" />
              <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
              <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
            </div>
          </div>

        </div>

        <div className="border-t border-[#D4AF37]/10 mt-10 pt-6 text-center text-gray-500">
          © 2026 AURELIX. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}