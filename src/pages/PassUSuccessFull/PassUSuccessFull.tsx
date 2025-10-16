import {  Link } from "react-router";


const PassUSuccessFull = () => {
  
  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-white overflow-hidden">
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center relative">
        <img
          src="/Images/logo/Looper1.png"
          className="absolute h-auto rounded-full w-3/12 -top-8 -left-8  animate-[spin_15s_linear_infinite]"
        />
        <img src="/Images/logo/img2.png" className="h-auto w-44" alt="logo" />
        <img
          src="/Images/logo/Looper1.png"
          className="absolute h-auto rounded-full w-3/12 -bottom-8 -right-8  animate-[spin_15s_linear_infinite]"
        />
      </div>
      <div className="w-full lg:w-1/2 h-full bg-[#4e7ba0] flex justify-center items-center">
        <div className="flex flex-col items-center gap-14">
          <img
            className="w-32 h-32"
            src="/Images/icons/success.png"
            alt="success"
          />
          <div className="text-white flex flex-col gap-5 max-w-[300px]">
            <h1 className=" text-3xl">Successful</h1>
            <p className="text-sm text-[#EEEEEE]">
              Your password has been reset successfully.
            </p>
            <Link
              to={"/dashboard/login"}
              className="bg-[#048eff] py-2 rounded-lg cursor-pointer text-center "
            >
              Goto Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassUSuccessFull;
