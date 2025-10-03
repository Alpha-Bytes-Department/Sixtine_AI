import { useStatus } from "../../../providers/StatusProvider";

const WhatSixtien = () => {
  const { isEnglish } = useStatus();

  return (
    <div className="flex flex-col gap-24 bg-[#faf6ed] w-full py-40">
      {/* title  */}
      <div className="flex flex-col justify-center items-center text-black ">
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

      <div className="flex gap-7 justify-center items-center flex-wrap">
        {/* card - 1  */}
        <div className="flex flex-col justify-center items-center gap-5 bg-gradient-to-r from-[#0D63AA] to-[#7AEADD] p-5 rounded-4xl h-[384px] w-[406px]">
          <div className=" bg-white rounded-full">
            <img
              src="/Images/icons/hearing.png"
              alt="hearing"
              className=" w-[100px] h-[100px] object-cover p-6"
            />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="text-3xl font-semibold text-white ms-3">Listen & understand</p>
            <ul className="list-disc text-white text-xl mx-12">
              <li>Real-time transcription & smart documentation</li>
              <li>OCR & document understanding</li>
            </ul>
          </div>
        </div>
        {/* card - 2  */}
        <div className="flex flex-col justify-center items-center gap-5 bg-[#434343] p-5 rounded-4xl h-[384px] w-[406px]">
          <div className=" bg-white rounded-full">
            <img
              src="/Images/icons/people.png"
              alt="hearing"
              className=" w-[100px] h-[100px] object-cover p-6"
            />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="text-3xl font-semibold text-white ms-3 ">Act on Your Behalf</p>
            <ul className="list-disc text-white text-xl mx-12">
              <li>Voice or text interaction</li>
              <li>Form-filling, letter drafting, summaries</li>
            </ul>
          </div>
        </div>
        {/* card - 3  */}
        <div className="flex flex-col justify-center  items-center gap-5 bg-gradient-to-r from-[#0D63AA] to-[#7AEADD] p-5 rounded-4xl h-[384px] w-[406px]">
          <div className=" bg-white rounded-full">
            <img
              src="/Images/icons/puzzle.png"
              alt="hearing"
              className=" w-[100px] h-[100px] object-cover p-6"
            />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="text-3xl font-semibold text-white ms-3">Fits Into Your Workflow</p>
            <ul className="list-disc text-white text-xl mx-12">
              <li>Works with your billing and email</li>
              <li>No app switching, no workflow disruption</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatSixtien;
