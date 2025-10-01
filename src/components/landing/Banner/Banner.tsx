import Navbar from "../../shared/Navbar/Navbar";

const Banner = () => {
  return (
    <div className="bg-[conic-gradient(from_180deg_at_50%_80.45%,#0D63AA_0deg,#C4EEC8_360deg)] h-screen w-full relative overflow-x-hidden overflow-y-hidden scrollbar-none">
      {/*------- loopers ----- */}
      <img
        src="/Images/logo/Looper2.png"
        className="absolute h-auto rounded-full w-3/12 -top-5 -left-5 sm:-top-8 sm:-left-8 md:-top-12 md:-left-12 lg:-top-20 lg:-left-20 xl:-top-32 xl:-left-32 2xl:-left-40 2xl:-top-40 animate-[spin_15s_linear_infinite]"
      />
      {/*--------------------- navbar--------------------  */}
      <div>
        <Navbar/>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center h-full w-11/12 sm:w-10/12 xl:w-7/12 text-center mx-auto">
        <div>
          <p className="text-white inter text-4xl">MISSION</p>
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
          SixtineAI empowers doctors to spend less time on paperwork and more
          time with patients—while unlocking a scalable, AI-driven future for
          healthcare.
        </p>
        <p className="text-2xl text-[#E6E6E6]">
          Backed by cutting-edge AI, SixtineAI streamlines clinical
          documentation, billing, referrals, and admin workflows—with seamless
          OCR integration.
        </p>
        <button className="text-white bg-[#0d63aa] rounded-full py-3 px-5 cursor-pointer">
          Join early access
        </button>
      </div>

      <img
        src="/Images/logo/Looper1.png"
        className="absolute h-auto rounded-full w-3/12 bottom-0 -right-5 sm:-right-8 md:-right-14 lg:-right-16 xl:-right-26 2xl:-right-32 animate-[spin_15s_linear_infinite]"
      />
    </div>
  );
};

export default Banner;
