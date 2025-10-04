import { Link } from "react-router";
import { useStatus } from "../../../providers/StatusProvider";
import { motion } from "motion/react";

const Navbar = () => {
  const { languageStat, setLanguageStat } = useStatus();
  const isFrench = languageStat === "french";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-between items-center border-2 border-[#4E7BA0] bg-[#FFFFFF80] backdrop-blur-[400px] shadow-[0px_0px_6px_0px_#00000033] rounded-full px-2 lg:px-8 py-2 max-w-5xl mx-3 lg:mx-auto mt-3 lg:mt-10"
    >
      <div className="flex gap-2 lg:gap-5 items-center">
        <Link
          className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer"
          to={"/mission"}
        >
          {isFrench ? "MISSION" : "MISSION"}
        </Link>
        <Link
          className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer"
          to={"/what-we-do"}
        >
          {isFrench ? "CE QUE NOUS FAISONS" : "WHAT WE DO"}
        </Link>
        <Link
          className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer"
          to={"/use-cases"}
        >
          {isFrench ? "CAS D'UTILISATION" : "USE CASES"}
        </Link>
      </div>
      <img
        src="/Images/logo/image3.png"
        className="w-12 h-auto lg:w-24 lg:h-14"
      />
      <div className="flex gap-2 lg:gap-5 items-center">
        <Link
          className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer"
          to={"/mission"}
        >
          {isFrench ? "NOTRE VISION" : "OUR VISSION"}
        </Link>
        <Link
          className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer"
          to={"/what-we-do"}
        >
          {isFrench ? "ENTRER EN CONTACT" : "GET IN TOUCH"}
        </Link>
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
