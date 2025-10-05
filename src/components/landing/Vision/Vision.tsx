import { useStatus } from "../../../providers/StatusProvider";
import { motion } from "motion/react";

const Vision = () => {
  const { isEnglish } = useStatus();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#faf6ed] py-20 flex flex-col gap-12 w-11/12 sm:w-10/12 xl:w-7/12 text-center mx-auto"
    >
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
          {isEnglish
            ? "We believe AI in medicine must serve people first — not replace them."
            : "Nous pensons que l’IA en médecine doit d’abord servir les gens, et non les remplacer."}
        </h1>
        <p className="text-[#4E7BA080] mt-3 text-lg">
          {isEnglish
            ? "SixtineAI is built with a simple, unwavering principle: technology should amplify human care, never compromise it. We aim to reduce the cognitive and administrative burden on healthcare professionals, so they can focus on what truly matters — their patients."
            : "SixtineAI repose sur un principe simple et inébranlable : la technologie doit amplifier les soins, sans jamais les compromettre. Notre objectif est de réduire la charge cognitive et administrative des professionnels de santé, afin qu'ils puissent se concentrer sur l'essentiel : leurs patients."}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row  justify-center items-center  gap-5">
        <div className="flex flex-col justify-start items-center gap-5 min-w-sm">
          <img
            src="/Images/icons/blueHand.png"
            className="w-auto h-20"
            alt="blue hand"
          />
          <div>
            <h1 className="font-bold text-[#4E7BA0CC] text-3xl flex-1">
              {isEnglish ? "Built on Trust" : "Construit sur la confiance"}
            </h1>
            <p className="text-[#4E7BA080] text-xl">
              {isEnglish
                ? "We handle medical data with the utmost responsibility. SixtineAI is designed for privacy by default, with security and compliance at its core."
                : "Nous traitons les données médicales avec la plus grande responsabilité. SixtineAI est conçu pour la confidentialité par défaut, avec la sécurité et la conformité comme priorités."}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-5 min-w-sm">
          <img
            src="/Images/icons/multipeople.png"
            className="w-auto h-20"
            alt="human"
          />
          <div>
            <h1 className="font-bold text-[#4E7BA0CC] text-3xl flex-1">
              {isEnglish ? "Human-First" : "L’humain d’abord"}
            </h1>
            <p className="text-[#4E7BA080] text-xl">
              {isEnglish
                ? "SixtineAI is trained to work with clinicians, adapting to their language, preferences, and workflows. Human judgment remains central — our AI is a tool, not a decider."
                : "SixtineAI est conçue pour travailler avec les cliniciens et s'adapter à leur langage, leurs préférences et leurs flux de travail. Le jugement humain reste primordial : notre IA est un outil, pas un décideur."}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center gap-5 min-w-sm">
          <img
            src="/Images/icons/ethics.png"
            className="w-auto h-20 "
            alt="ethics"
          />
          <div>
            <h1 className="font-bold text-[#4E7BA0CC] text-3xl flex-1">
              {isEnglish ? "Ethical AI" : "IA éthique"}
            </h1>
            <p className="text-[#4E7BA080] text-xl">
              {isEnglish
                ? "We train our models with intent, verify with care, and stay accountable."
                : "Nous formons nos modèles avec intention, vérifions avec soin et restons responsables."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Vision;
