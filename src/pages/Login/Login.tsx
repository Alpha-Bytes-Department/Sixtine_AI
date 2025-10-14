import { Form, Link } from "react-router";
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import {HiOutlineEye , HiOutlineEyeOff } from "react-icons/hi";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(true);

  const handleSubmit = ()=>{
    console.log("button clicked");
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
        <div className="text-white space-y-4">
          <h1 className=" text-3xl">
            Welcome to <span className="text-[#C2FFC8] italic">Aida</span>
          </h1>
          <p className="text-sm text-[#EEEEEE]">Please login to continue</p>
          <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label
              htmlFor=""
              className={`flex justify-center items-center bg-white text-[#6C7275] rounded-lg px-2 ${error? "border-1 border-[#FF0000]" : ""}`}
            >
              <MdOutlineMail className="text-lg"/>
              <input
                type="text"
                name="email"
                id="email"
                className={`p-2 focus:outline-0 flex-1 `}
                placeholder="Email Address"
              />
            </label>
            <label
              htmlFor=""
              className="flex justify-center items-center bg-white text-[#6C7275] rounded-lg px-2"
            >
              <FiLock className="text-lg" />
              <input
                type={showPassword? "text" : "password"}
                name="email"
                id="email"
                className={"p-2 focus:outline-0"}
                placeholder="Password"
              />
              {showPassword?<HiOutlineEyeOff onClick={()=>setShowPassword(false)} className="cursor-pointer text-lg"/>:<HiOutlineEye onClick={()=>setShowPassword(true)} className="cursor-pointer text-lg"/>}
            </label>
            <button className="bg-[#048eff] py-2 rounded-lg cursor-pointer transform active:translate-0.9">Login</button>
            <Link to={"/dashboard/forgot-password"} className={`text-sm  ${error? "text-[#FF9F9F]" : "text-[#EEEEEE]"}`}>
              Forgot Password
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
