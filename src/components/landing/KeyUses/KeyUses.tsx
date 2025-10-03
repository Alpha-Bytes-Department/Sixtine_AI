import { useStatus } from "../../../providers/StatusProvider";
import { FaFileAlt } from "react-icons/fa";

const KeyUses = () => {
  const { isEnglish } = useStatus();
  

  return (
    <div className="flex flex-col gap-24 bg-[#1169B266] w-full py-40">
      {/* title  */}
      <div className="flex flex-col justify-center items-center text-black ">
        <p className="inter text-lg text-[#0D63AA]">
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
      </div>
      {/* card item  */}

      <div className="flex gap-7 justify-center items-center flex-wrap">
        {/* card - 1  */}
        <div className="flex flex-col justify-center items-center gap-5 bg-white to-[#7AEADD] p-5 rounded-4xl h-[506px] w-[384px]">
          <div className="  rounded-full">
            <img
              src="/Images/icons/Simplification.png"
              alt="hearing"
              className=" w-[150px] h-[150px] object-cover p-6"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-3xl font-semibold text-[#5C5C5C]">Patient File Management</p>
            <ul className="list-disc text-[#5C5C5C] text-xl mx-12">
              <li>Auto-generate notes in your style</li>
              <li>Summarize documents, extract key info</li>
              <li>Ask any question about a patient, instantly</li>
            </ul>
          </div>
        </div>
        {/* card - 2  */}
        <div className="flex flex-col justify-center items-center gap-5 bg-[#4E7BA080] p-5 rounded-4xl h-[506px] w-[384px]">
          <div className=" rounded-full">
            <img
              src="/Images/icons/hand.png"
              alt="hearing"
              className=" w-[150px] h-[150px] object-cover p-6"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-3xl font-semibold text-white">Effortless Referrals & Forms</p>
            <ul className="list-disc text-white text-xl mx-12">
              <li>Auto-fill any form, letters or referrals</li>
              <li>Generate summaries for patients/families</li>
              <li>Integrated with your OCR</li>
            </ul>
          </div>
        </div>
        {/* card - 3  */}
        <div className="flex flex-col justify-center items-center gap-5 bg-white p-5 rounded-4xl h-[506px] w-[384px]">
          <div className="rounded-full">
            {/* <img
              src="/Images/icons/file.png"
              alt="hearing"
              className=" w-[150px] h-[150px]  object-cover p-6 rounded-sm"
            /> */}
            <FaFileAlt className="text-8xl text-[#5C5C5C] "/>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-3xl font-semibold text-[#5C5C5C]">
              Optimized Billing & Coding
            </p>
            <ul className="list-disc text-[#5C5C5C] text-xl mx-12">
              <li>Auto-code consultations (TARDOC, CIM-10)</li>
              <li>Surface billing opportunities</li>
              <li>Keep documentation insurance-ready</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyUses;
