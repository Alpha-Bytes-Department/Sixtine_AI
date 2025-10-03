import { useStatus } from "../../../providers/StatusProvider";

const Vision = () => {
    const {isEnglish} = useStatus();
  return (
    <div className="bg-[#faf6ed]">
      {/* title  */}
      <div className="flex flex-col justify-center items-center text-black ">
        <p className="inter text-lg text-[#0D63AA]">
          {isEnglish ? "OUR VISION" : "NOTRE VISION"}
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
      <div>
        <h1></h1>
        <p></p>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <h1></h1>
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <h1></h1>
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <h1></h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
