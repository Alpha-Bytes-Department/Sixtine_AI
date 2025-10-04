import { useStatus } from "../../../providers/StatusProvider";
import { FaFileAlt } from "react-icons/fa";
import { motion } from "motion/react";

const KeyUses = () => {
  const { isEnglish } = useStatus();

  return (
    <div className="flex flex-col gap-24 bg-[#1169B266] w-full py-40 relative overflow-hidden">
      {/* looper top  */}
      <img
        src="/Images/logo/Looper1.png"
        className="absolute h-auto rounded-full w-1/5 -top-5 -left-5 sm:-top-8 sm:-left-8 md:-top-12 md:-left-12 lg:-top-20 lg:-left-20 xl:-top-32 xl:-left-32 2xl:-left-40 2xl:-top-40 animate-[spin_15s_linear_infinite]"
      />
      {/* title  */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col justify-center items-center text-black "
      >
        <p className="inter text-2xl text-[#0D63AA]">
          {isEnglish ? "KEY USE CASES" : "CAS D'UTILISATION CLÉS"}
        </p>
        <p>
          <svg
            className="w-[200px] h-[14px] " // Tailwind sizing
            viewBox="0 0 200 14"
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
      </motion.div>
      {/* card item  */}

      <div className="flex gap-7 justify-center items-center flex-wrap">
        {/* card - 1  */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col justify-center items-center gap-5 bg-white to-[#7AEADD] p-5 rounded-4xl h-[506px] w-[384px]"
        >
          <div className="  rounded-full">
            <img
              src="/Images/icons/Simplification.png"
              alt="hearing"
              className=" w-[150px] h-[150px] object-cover p-6"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-3xl font-semibold text-[#5C5C5C]">
              {isEnglish ? "Patient File Management" : "Gestion des dossiers patients"}
            </p>
            <ul className="list-disc text-[#5C5C5C] text-xl mx-12">
              <li>{isEnglish ? "Auto-generate notes in your style" : "Générez automatiquement des notes dans votre style"}</li>
              <li>{isEnglish ? "Summarize documents, extract key info" : "Résumer les documents, extraire les informations clés"}</li>
              <li>{isEnglish ? "Ask any question about a patient, instantly" : "Posez instantanément n'importe quelle question sur un patient"}</li>
            </ul>
          </div>
        </motion.div>
        {/* card - 2  */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-center items-center gap-5 bg-[#4E7BA080] p-5 rounded-4xl h-[506px] w-[384px]"
        >
          <div className=" rounded-full">
            <img
              src="/Images/icons/hand.png"
              alt="hearing"
              className=" w-[150px] h-[150px] object-cover p-6"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-3xl font-semibold text-white">
              {isEnglish ? "Effortless Referrals & Forms" : "Références et formulaires sans effort"}
            </p>
            <ul className="list-disc text-white text-xl mx-12">
              <li>{isEnglish ? "Auto-fill any form, letters or referrals" : "Remplissage automatique de tout formulaire, lettre ou référence"}</li>
              <li>{isEnglish ? "Generate summaries for patients/families" : "Générer des résumés pour les patients/familles"}</li>
              <li>{isEnglish ? "Integrated with your OCR" : "Intégré à votre OCR"}</li>
            </ul>
          </div>
        </motion.div>
        {/* card - 3  */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col justify-center items-center gap-5 bg-white p-5 rounded-4xl h-[506px] w-[384px]"
        >
          <div className="rounded-full">
            {/* <img
              src="/Images/icons/file.png"
              alt="hearing"
              className=" w-[150px] h-[150px]  object-cover p-6 rounded-sm"
            /> */}
            <FaFileAlt className="text-8xl text-[#5C5C5C] " />
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-3xl font-semibold text-[#5C5C5C]">
              {isEnglish ? "Optimized Billing & Coding" : "Facturation et codage optimisés"}
            </p>
            <ul className="list-disc text-[#5C5C5C] text-xl mx-12">
              <li>{isEnglish ? "Auto-code consultations (TARDOC, CIM-10)" : "Consultations d'auto-code (TARDOC, CIM-10)"}</li>
              <li>{isEnglish ? "Surface billing opportunities" : "Opportunités de facturation de surface"}</li>
              <li>{isEnglish ? "Keep documentation insurance-ready" : "Gardez la documentation prête pour l'assurance"}</li>
            </ul>
          </div>
        </motion.div>
      </div>
      {/* looper bottom  */}
      <img
        src="/Images/logo/Looper1.png"
        className="absolute h-auto rounded-full w-1/5 -bottom-5 -right-5 sm:-bottom-8 sm:-right-8 md:-bottom-12 md:-right-12 lg:-bottom-20 lg:-right-20 xl:-bottom-32 xl:-right-32 2xl:-right-40 2xl:-bottom-40 animate-[spin_15s_linear_infinite]"
      />
    </div>
  );
};

export default KeyUses;
