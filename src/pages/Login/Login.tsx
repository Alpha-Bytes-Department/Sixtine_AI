import { useState } from "react";
import { FiLock } from "react-icons/fi";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { Form, Link, useNavigate } from "react-router";
import { useStatus } from "../../providers/StatusProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const { isEnglish } = useStatus();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/dashboard");
    setError(false);
  };

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
        <div className="text-white space-y-4">
          <h1 className=" text-3xl">
            {isEnglish ? "Welcome to" : "Bienvenue à"}{" "}
            <span className="text-[#C2FFC8] italic">Aida</span>
          </h1>
          <p className="text-sm text-[#EEEEEE]">
            {isEnglish
              ? "Please login to continue"
              : "Veuillez vous connecter pour continuer"}
          </p>
          <Form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label
              htmlFor=""
              className={`flex justify-center items-center bg-white text-[#6C7275] rounded-lg px-2 ${
                error ? "border-1 border-[#FF0000]" : ""
              }`}
            >
              <MdOutlineMail className="text-lg" />
              <input
                type="text"
                name="email"
                required={true}
                id="email"
                className={`p-2 focus:outline-0 flex-1 `}
                placeholder={isEnglish ? "Email Address" : "Adresse e-mail"}
              />
            </label>
            <label
              htmlFor=""
              className="flex justify-center items-center bg-white text-[#6C7275] rounded-lg px-2"
            >
              <FiLock className="text-lg" />
              <input
                type={showPassword ? "text" : "password"}
                name="email"
                required={true}
                id="email"
                className={"p-2 focus:outline-0"}
                placeholder={isEnglish ? "Password" : "Mot de passe"}
              />
              {showPassword ? (
                <HiOutlineEyeOff
                  onClick={() => setShowPassword(false)}
                  className="cursor-pointer text-lg"
                />
              ) : (
                <HiOutlineEye
                  onClick={() => setShowPassword(true)}
                  className="cursor-pointer text-lg"
                />
              )}
            </label>
            <button
              type="submit"
              className="bg-[#048eff] py-2 rounded-lg cursor-pointer transform active:translate-0.9"
            >
              {isEnglish ? "Login" : "Connexion"}
            </button>
            <Link
              to={"/dashboard/forgot-password"}
              className={`text-sm  ${
                error ? "text-[#FF9F9F]" : "text-[#EEEEEE]"
              }`}
            >
              {isEnglish ? "Forgot Password" : "Mot de passe oublié"}
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
