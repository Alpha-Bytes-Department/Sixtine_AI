import { useNavigate, useLocation } from "react-router";
import { useStatus } from "../../../providers/StatusProvider";
import { motion } from "motion/react";

const Navbar = () => {
  const { languageStat, setLanguageStat } = useStatus();
  const navigate = useNavigate();
  const location = useLocation();

  //for navigation 
  const handleHashLink = (hash: string) => {
    const id = hash.replace("#", "");
    // If we're not on the landing page, navigate there first, then scroll after a short delay
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Wait for navigation + render; use requestAnimationFrame twice for reliability
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // try again next frame, up to a few times
          setTimeout(() => {
            const elAgain = document.getElementById(id);
            if (elAgain) elAgain.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 150);
        }
      };
      requestAnimationFrame(() => requestAnimationFrame(tryScroll));
    } else {
      // Same page: scroll immediately
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  const isFrench = languageStat === "french";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-between items-center border-2 border-[#4E7BA0] bg-[#FFFFFF80] backdrop-blur-[400px] shadow-[0px_0px_6px_0px_#00000033] rounded-full px-2 lg:px-8 py-2 max-w-5xl mx-3 lg:mx-auto mt-3 lg:mt-10"
    >
      <div className="flex gap-2 lg:gap-5 items-center">
        <button
          className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer bg-transparent border-0 p-0"
          onClick={() => handleHashLink("#mission")}
        >
          {isFrench ? "MISSION" : "MISSION"}
        </button>
        <button
          className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer bg-transparent border-0 p-0"
          onClick={() => handleHashLink("#whatSixtine")}
        >
          {isFrench ? "CE QUE NOUS FAISONS" : "WHAT WE DO"}
        </button>
        <button
          className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer bg-transparent border-0 p-0"
          onClick={() => handleHashLink("#key-use")}
        >
          {isFrench ? "CAS D'UTILISATION" : "USE CASES"}
        </button>
      </div>
      <img
        src="/Images/logo/image3.png"
        className="w-12 h-auto lg:w-24 lg:h-14"
      />
      <div className="flex gap-2 lg:gap-5 items-center">
        <button
          className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer bg-transparent border-0 p-0"
          onClick={() => handleHashLink("#vision")}
        >
          {isFrench ? "NOTRE VISION" : "OUR VISION"}
        </button>
        <button
          className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer bg-transparent border-0 p-0"
          onClick={() => navigate("#getInTouch")}
        >
          {isFrench ? "ENTRER EN CONTACT" : "GET IN TOUCH"}
        </button>
        <select
          value={languageStat}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setLanguageStat(e.target.value as "english" | "french")
          }
          className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer outline-0"
        >
          <option value="english">EN</option>
          <option value="french">FR</option>
        </select>
      </div>
    </motion.div>
  );
};

export default Navbar;
