import { useStatus } from "../../../providers/StatusProvider";

const WhatSixtien = () => {
  const { isEnglish } = useStatus();

  return (
    <div className="bg-[#faf6ed] w-full h-screen">
      {/* title  */}
      <div className="flex flex-col justify-center items-center text-black pt-10">
        <p className="inter text-lg">
          {isEnglish ? "WHAT SIXTINE DOES" : "CE QUE FAIT SIXTINE"}
        </p>
        <p>
          <svg
            className="w-[200px] h-[14px]" // Tailwind sizing
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
      </div>
      {/* card item  */}
      <div className="flex gap-5 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-r from-[#0D63AA] to-[#7AEADD] p-5 rounded-xl h-[384px] w-[406px]">
          <img
            src="/Images/icons/hearing.png"
            alt="hearing"
            className="p-5 bg-white rounded-full w-[100px] h-[100px]"
          />
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-4xl text-white">Listen & understand</p>
            <ul className="list-disc text-white text-xl mx-12">
              <li>Real-time transcription & smart documentation</li>
              <li>OCR & document understanding</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-r from-[#0D63AA] to-[#7AEADD] p-5 rounded-xl h-[384px] w-[406px]">
          <img
            src="/Images/icons/people.png"
            alt="hearing"
            className="p-3 bg-white rounded-full w-[100px] h-[100px] object-cover"
          />
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-4xl text-white">Listen & understand</p>
            <ul className="list-disc text-white text-xl mx-12">
              <li>Real-time transcription & smart documentation</li>
              <li>OCR & document understanding</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-r from-[#0D63AA] to-[#7AEADD] p-5 rounded-xl h-[384px] w-[406px]">
          <img
            src="/Images/icons/hearing.png"
            alt="hearing"
            className="p-5 bg-white rounded-full w-[100px] h-[100px]"
          />
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-4xl text-white">Listen & understand</p>
            <ul className="list-disc text-white text-xl mx-12">
              <li>Real-time transcription & smart documentation</li>
              <li>OCR & document understanding</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSixtien;
