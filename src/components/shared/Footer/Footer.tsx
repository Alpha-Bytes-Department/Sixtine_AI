import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
// import { motion } from "motion/react";
import { useStatus } from "../../../providers/StatusProvider";
import { Link } from "react-router";

export default function Footer() {
  const { isEnglish } = useStatus();
  return (
    <footer className="bg-[#05121C] text-[#198AE6] py-16 lg:py-6">
      <div className="border-b border-[#198AE6]">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left Section - Brand */}
            <div className="space-y-4 ">
              <div className="flex items-center gap-2">
                <Link to="/">
                <img
                  src="/Images/logo/image3.png"
                  alt="logo"
                  className="w-44 h-auto"
                />
                </Link>
              </div>
              <p className="text-sm leading-relaxed max-w-sm text-[#408BC8CC]">
                {isEnglish
                  ? "SixtineAI empowered doctors to spend less time on paperwork and more time with patients—while unlocking a scalable, AI-native platform for healthcare."
                  : "SixtineAI a permis aux médecins de consacrer moins de temps à la paperasse et plus de temps aux patients, tout en débloquant une plateforme évolutive et native de l'IA pour les soins de santé."}
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
            </div>
            {/* Middle Section - Quick Links */}
            <div className="flex-shrink-0">
              <h3 className="font-semibold mb-4 text-sm">
                {isEnglish ? "Quick Links" : "Liens rapides"}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className=" hover:text-cyan-400 text-sm transition block"
                  >
                    {isEnglish ? "Mission" : "Mission"}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-cyan-400 text-sm transition block"
                  >
                    {isEnglish ? "What we do" : "Ce que nous faisons"}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-cyan-400 text-sm transition block"
                  >
                    {isEnglish ? "Use cases" : "Cas d'utilisation"}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-cyan-400 text-sm transition block"
                  >
                    {isEnglish ? "Our vision" : "Notre vision"}
                  </a>
                </li>
                <li>
                  <a
                  href="#getInTouch"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('getInTouch')?.scrollIntoView({
                    behavior: 'smooth'
                    });
                  }}
                  className="hover:text-cyan-400 text-sm transition block cursor-pointer"
                  >
                  {isEnglish ? "Get in touch" : "Entrer en contact"}
                  </a>
                </li>
              </ul>
            </div>
            {/* Right Section - Contact Us */}
            <div className="flex-shrink-0 text-[#198AE6]">
              <h3 className="font-semibold mb-4 text-sm">
                {isEnglish ? "Contact Us" : "Contactez-nous"}
              </h3>
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500 border-opacity-20">
        <div className="max-w-7xl mx-auto px-8 py-4 text-center">
          <p className="text-xs text-[#408BC8CC]">
            © 2025 <span className="text-[#198AE6]">SixtineAI</span>.
            {isEnglish ? "All Rights reserved." : "Tous droits réservés."}
          </p>
        </div>
      </div>
    </footer>
  );
}
