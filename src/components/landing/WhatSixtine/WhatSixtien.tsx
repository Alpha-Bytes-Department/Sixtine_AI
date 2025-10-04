import { useStatus } from "../../../providers/StatusProvider";
import { motion } from "motion/react";

const WhatSixtien = () => {
  const { isEnglish } = useStatus();

  return (
    <div className="flex flex-col gap-24 bg-[#faf6ed] w-full py-40">
      {/* title  */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col justify-center items-center text-black "
      >
        <p className="inter text-2xl">
          {isEnglish ? "WHAT SIXTINE DOES" : "CE QUE FAIT SIXTINE"}
        </p>
        <p>
          <svg
            className="w-[250px] h-[17.5px]" // Tailwind sizing
            viewBox="0 0 200 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 11C85 -1 115 -1 198.5 11"
              stroke="#183B58"
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
          className="flex flex-col justify-center items-center gap-5 bg-gradient-to-r from-[#0D63AA] to-[#7AEADD] p-5 rounded-4xl h-[384px] w-[406px]"
        >
          <img
            src="/Images/logo/Looper2.png"
            className="absolute w-[500px] z-10 h-auto rounded-full opacity-10"
          />
          <div className=" bg-white rounded-full z-20">
            <img
              src="/Images/icons/hearing.png"
              alt="hearing"
              className=" w-[100px] h-[100px] object-cover p-6 "
            />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="text-3xl font-semibold text-white ms-3">
              {isEnglish ? "Listen & understand" : "Écouter et comprendre"}
            </p>
            <ul className="list-disc text-white text-xl mx-12">
              <li>{isEnglish ? "Real-time transcription & smart documentation" : "Transcription en temps réel et documentation intelligente"}</li>
              <li>{isEnglish ? "OCR & document understanding" : "OCR et compréhension des documents"}</li>
            </ul>
          </div>
        </motion.div>
        {/* card - 2  */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center items-center gap-5 bg-[#434343] p-5 rounded-4xl h-[384px] w-[406px]"
        >
          <img
            src="/Images/logo/Looper2.png"
            className="absolute w-[500px] z-10 h-auto rounded-full opacity-10"
          />
          <div className=" bg-white rounded-full z-20">
            <img
              src="/Images/icons/people.png"
              alt="hearing"
              className=" w-[100px] h-[100px] object-cover p-6"
            />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="text-3xl font-semibold text-white ms-3 ">
              {isEnglish ? "Act on Your Behalf" : "Agissez en votre nom"}
            </p>
            <ul className="list-disc text-white text-xl mx-12">
              <li>{isEnglish ? "Voice or text interaction" : "Interaction vocale ou textuelle"}</li>
              <li>{isEnglish ? "Form-filling, letter drafting, summaries" : "Remplissage de formulaires, rédaction de lettres, résumés"}</li>
            </ul>
          </div>
        </motion.div>
        {/* card - 3  */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col justify-center  items-center gap-5 bg-gradient-to-r from-[#0D63AA] to-[#7AEADD] p-5 rounded-4xl h-[384px] w-[406px]"
        >
          <img
            src="/Images/logo/Looper2.png"
            className="absolute w-[500px] z-10 h-auto rounded-full opacity-10"
          />
          <div className=" bg-white rounded-full z-20">
            <img
              src="/Images/icons/puzzle.png"
              alt="hearing"
              className=" w-[100px] h-[100px] object-cover p-6"
            />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="text-3xl font-semibold text-white ms-3">
              {isEnglish ? "Fits Into Your Workflow" : "S'intègre à votre flux de travail"}
            </p>
            <ul className="list-disc text-white text-xl mx-12">
              <li>{isEnglish ? "Works with your billing and email" : "Fonctionne avec votre facturation et votre e-mail"}</li>
              <li>{isEnglish ? "No app switching, no workflow disruption" : "Pas de changement d'application, pas de perturbation du flux de travail"}</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatSixtien;
