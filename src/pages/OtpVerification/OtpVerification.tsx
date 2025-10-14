import { useState } from "react";
import { Form, useNavigate } from "react-router";

const OtpVerification = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(true);

  const handleSubmit = (event:  React.MouseEvent<HTMLFormElement>)=>{
    setError(false)
    event.preventDefault();
    navigate("/dashboard/set-new-password")
  }


  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-white overflow-hidden">
      <div className="w-full lg:w-1/2 h-full flex justify-center items-center relative">
        <img
          src="/Images/logo/Looper1.png"
          className="absolute h-auto rounded-full w-3/12 -top-8 -left-8  animate-[spin_15s_linear_infinite]"
        />
        <img
          src="/Images/logo/img2.png"
          className="h-auto w-44"
          alt="logo"
        />
        <img
          src="/Images/logo/Looper1.png"
          className="absolute h-auto rounded-full w-3/12 -bottom-8 -right-8  animate-[spin_15s_linear_infinite]"
        />
      </div>
      <div className="w-full lg:w-1/2 h-full bg-[#4e7ba0] flex justify-center items-center">
        <div className="text-white max-w-[280px] space-y-4">
          <h1 className=" text-3xl">
            Verification
          </h1>
          <p className="text-sm text-[#EEEEEE]">Enter your 4 digits code that you received on your email.</p>
          <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label
              htmlFor=""
              className="flex  justify-center items-center gap-2.5  text-[#6C7275] rounded-lg px-2"
            >
              <input
                type="text"
                name="email"
                id="email"
                className={`p-2 focus:outline-0 w-16 bg-white rounded-md text-center ${error? "border-1 border-[#FF0000]" : ""}`}
              />
              <input
                type="text"
                name="email"
                id="email"
                className={`p-2 focus:outline-0 w-16 bg-white rounded-md text-center ${error? "border-1 border-[#FF0000]" : ""}`}
              />
              <input
                type="text"
                name="email"
                id="email"
                className={`p-2 focus:outline-0 w-16 bg-white rounded-md text-center ${error? "border-1 border-[#FF0000]" : ""}`}
              />
              <input
                type="text"
                name="email"
                id="email"
                className={`p-2 focus:outline-0 w-16 bg-white rounded-md text-center ${error? "border-1 border-[#FF0000]" : ""}`}
              />
            </label>
            <p className="text-center text-[#FF9F9F]">00:30</p>
            <button type="submit" className="bg-[#048eff] py-2 rounded-lg cursor-pointer transform active:translate-0.9">Continue</button>
            <p className="text-sm">If you don't receive ! <button className=" text-[#FF9F9F] underline font-semibold cursor-pointer">
              resend
            </button></p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
