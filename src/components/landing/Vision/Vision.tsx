import { useStatus } from "../../../providers/StatusProvider";
import { motion } from "motion/react";

const Vision = () => {
  const { isEnglish } = useStatus();
  return (
    <motion.div initial={{opacity:0, scale:0.5}}
       whileInView={{opacity:1, scale:1}}
       transition={{duration: 0.8, ease: "easeOut" }} className="bg-[#faf6ed] py-20 flex flex-col gap-12 w-11/12 sm:w-10/12 xl:w-7/12 text-center mx-auto">
      {/* title  */}
      <div className="flex flex-col justify-center items-center ">
        <p className="inter text-2xl text-[#0D63AA]">
          {isEnglish ? "OUR VISION" : "NOTRE VISION"}
        </p>
        <p>
          <svg
            className="w-[190px] h-[14px] " // Tailwind sizing
            viewBox="0 0 190 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 11C85 -1 115 -1 198.5 11"
              stroke="#0D63AA"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-[#4E7BA0CC]">
          We believe AI in medicine must serve people first — not replace them.
        </h1>
        <p className="text-[#4E7BA080] mt-3 text-lg">
          SixtineAI is built with a simple, unwavering principle: technology
          should amplify human care, never compromise it. We aim to reduce the
          cognitive and administrative burden on healthcare professionals, so
          they can focus on what truly matters — their patients.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  justify-center items-center  gap-5">
        <div className="flex flex-col justify-center items-center gap-5 min-w-sm">
          <img src="/Images/icons/blueHand.png" alt="blue hand" />
          <h1 className="font-bold text-[#4E7BA0CC] text-3xl">Built on Trust</h1>
          <p className="text-[#4E7BA080] text-xl">
            We handle medical data with the utmost responsibility. SixtineAI is
            designed for privacy by default, with security and compliance at its
            core.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 min-w-sm">
          <img src="/Images/icons/multipeople.png" alt="human" />
          <h1 className="font-bold text-[#4E7BA0CC] text-3xl">Human-First</h1>
          <p className="text-[#4E7BA080] text-xl">
            SixtineAI is trained to work with clinicians, adapting to their
            language, preferences, and workflows. Human judgment remains central
            — our AI is a tool, not a decider.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 min-w-sm">
          <img src="/Images/icons/ethics.png" alt="ethics" />
          <h1 className="font-bold text-[#4E7BA0CC] text-3xl">Ethical AI</h1>
          <p className="text-[#4E7BA080] text-xl">
            We train our models with intent, verify with care, and stay
            accountable.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Vision;
