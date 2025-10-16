import { Form, useNavigate } from "react-router";
import { FiLock } from "react-icons/fi";
import {HiOutlineEye , HiOutlineEyeOff } from "react-icons/hi";
import { useState } from "react";

const SetNewPassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (event:  React.MouseEvent<HTMLFormElement>)=>{
    event.preventDefault();
    navigate("/dashboard/password-update/successful");
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
        <div className="text-white space-y-4 max-w-[300px]">
          <h1 className=" text-3xl">
            New Password
          </h1>
          <p className="text-sm text-[#EEEEEE]">Set the new password for your account so you can login and access all features.</p>
          <Form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
            <label
              htmlFor=""
              className="flex justify-center items-center bg-white text-[#6C7275] rounded-lg px-2"
            >
              <FiLock className="text-lg" />
              <input
                type={showNewPassword? "text" : "password"}
                name="email"
                id="email" 
                required={true}
                
                className="p-2 focus:outline-0"
                placeholder="Enter new password"
              />
              {showNewPassword?<HiOutlineEyeOff onClick={()=>setShowNewPassword(false)} className="cursor-pointer text-lg"/>:<HiOutlineEye onClick={()=>setShowNewPassword(true)} className="cursor-pointer text-lg"/>}
            </label>
            <label
              htmlFor=""
              className="flex justify-center items-center bg-white text-[#6C7275] rounded-lg px-2"
            >
              <FiLock className="text-lg" />
              <input
                type={showConfirmPassword? "text" : "password"}
                name="email"
                id="email"
                required={true}
                className="p-2 focus:outline-0"
                placeholder="Confirm Password"
              />
              {showConfirmPassword?<HiOutlineEyeOff onClick={()=>setShowConfirmPassword(false)} className="cursor-pointer text-lg"/>:<HiOutlineEye onClick={()=>setShowConfirmPassword(true)} className="cursor-pointer text-lg"/>}
            </label>
            <button className="bg-[#048eff] py-2 rounded-lg cursor-pointer transform active:translate-0.9">Update password</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
