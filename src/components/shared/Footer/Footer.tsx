import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-[#05121C] text-[#198AE6] py-5">
      <div className="border-b border-[#198AE6]">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left Section - Brand */}
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.9 }} // start smaller and shifted left
              whileInView={{ opacity: 1, x: 0, scale: 1 }} // move to normal position
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4 flex-1"
            >
              <div className="flex items-center gap-2">
                <img
                  src="/Images/logo/BrainLogo.png"
                  alt="logo"
                  className="w-44 h-auto"
                />
              </div>
              <p className="text-sm leading-relaxed max-w-sm text-[#408BC8CC]">
                SixtineAI empowered doctors to spend less time on paperwork and
                more time with patients—while unlocking a scalable, AI-native
                platform for healthcare.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#1d4e76] hover:bg-opacity-30 flex items-center justify-center transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#1d4e76] hover:bg-opacity-30 flex items-center justify-center transition"
                >
                  <FaYoutube />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#1d4e76] hover:bg-opacity-30 flex items-center justify-center transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-[#1d4e76] hover:bg-opacity-30 flex items-center justify-center transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </motion.div>

            {/* Middle Section - Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }} // start smaller and shifted left
              whileInView={{ opacity: 1, x: 0, scale: 1 }} // move to normal position
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <h3 className="font-semibold mb-4 text-sm">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className=" hover:text-cyan-400 text-sm transition block"
                  >
                    Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-cyan-400 text-sm transition block"
                  >
                    What we do
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-cyan-400 text-sm transition block"
                  >
                    Use cases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-cyan-400 text-sm transition block"
                  >
                    Our vision
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-cyan-300 text-sm font-medium transition block"
                  >
                    Get in touch
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Right Section - Contact Us */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }} // start smaller and shifted left
              whileInView={{ opacity: 1, x: 0, scale: 1 }} // move to normal position
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-shrink-0 text-[#198AE6]"
            >
              <h3 className="font-semibold mb-4 text-sm">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <FaPhoneAlt />
                  <span className="">+41 22 519 72 17</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <IoMdMail />
                  <span className="">info@sixtineai.com</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <FaLocationDot />
                  <span className="">Switzerland</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500 border-opacity-20">
        <div className="max-w-7xl mx-auto px-8 py-4 text-center">
          <p className="text-xs text-[#408BC8CC]">
            © 2025 <span className="text-[#198AE6]">SixtineAI</span>. All Rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
