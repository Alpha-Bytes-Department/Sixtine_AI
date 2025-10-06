import { useStatus } from "../../../providers/StatusProvider";
import Navbar from "../../shared/Navbar/Navbar";
import { motion } from "motion/react";

const Banner = () => {
  const { languageStat } = useStatus();

  const french = languageStat === "french";

  return (
    <div id="mission" className="bg-[conic-gradient(from_180deg_at_50%_80.45%,#0D63AA_0deg,#C4EEC8_360deg)] h-screen w-full relative overflow-x-hidden overflow-y-hidden scrollbar-none">
      {/*------- loopers ----- */}
      <img
        src="/Images/logo/Looper2.png"
        className="absolute h-auto rounded-full w-3/12 -top-5 -left-5 sm:-top-8 sm:-left-8 md:-top-12 md:-left-12 lg:-top-20 lg:-left-20 xl:-top-32 xl:-left-32 2xl:-left-40 2xl:-top-40 animate-[spin_15s_linear_infinite]"
      />
      {/*--------------------- navbar--------------------  */}
      <div>
        <Navbar />
      </div>
      <motion.div
       initial={{opacity:0, scale:0}}
       whileInView={{opacity:1, scale:1}}
       transition={{duration: 0.5}}
        className="flex flex-col gap-4 justify-center items-center h-10/12 w-11/12 sm:w-10/12 xl:w-7/12 text-center mx-auto"
      >
        <div>
          <p className="text-white inter text-4xl">
            {french ? "MISSION" : "MISSION"}{" "}
          </p>
          <div>
            <svg
              width="146"
              height="10"
              viewBox="0 0 146 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.30249C63.5001 -0.075195 74.0001 -0.0751947 144.5 8.30251"
                stroke="#183B58"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <p className="font-bold text-2xl text-white">
          {french
            ? "SixtineAI permet aux médecins de consacrer moins de temps à la paperasse et plus de temps aux patients, tout en ouvrant la voie à un avenir évolutif et axé sur l'IA pour les soins de santé."
            : "SixtineAI empowers doctors to spend less time on paperwork and more time with patients—while unlocking a scalable, AI-driven future for healthcare."}
        </p>
        <p className="text-2xl text-[#E6E6E6]">
          {french
            ? "S'appuyant sur une IA de pointe, SixtineAI rationalise la documentation clinique, la facturation, les références et les flux de travail administratifs, avec une intégration OCR transparente."
            : "Backed by cutting-edge AI, SixtineAI streamlines clinical documentation, billing, referrals, and admin workflows—with seamless OCR integration."}
        </p>
        <button className="text-white bg-[#0d63aa] rounded-full py-3 px-5 cursor-pointer">
          {french ? "Rejoignez l'accès anticipé" : "Join early access"}
        </button>
      </motion.div>
      {/* looper bottom */}
      <img
        src="/Images/logo/Looper1.png"
        className="absolute h-auto rounded-full w-3/12 bottom-0 -right-5 sm:-right-8 md:-right-14 lg:-right-16 xl:-right-26 2xl:-right-32 animate-[spin_15s_linear_infinite]"
      />
    </div>
  );
};

export default Banner;
