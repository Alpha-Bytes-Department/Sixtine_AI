import { Form, Link } from "react-router";
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";

const Login = () => {


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
          src="/public/Images/logo/img2.png"
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
              className="flex justify-center items-center bg-white text-[#6C7275] rounded-lg px-2"
            >
              <MdOutlineMail />
              <input
                type="text"
                name="email"
                id="email"
                className="p-2 focus:outline-0"
                placeholder="Email Address"
              />
            </label>
            <label
              htmlFor=""
              className="flex justify-center items-center bg-white text-[#6C7275] rounded-lg px-2"
            >
              <FiLock />
              <input
                type="text"
                name="email"
                id="email"
                className="p-2 focus:outline-0"
                placeholder="Password"
              />
            </label>
            <button className="bg-[#048eff] py-2 rounded-lg cursor-pointer transform active:translate-0.9">Login</button>
            <Link to={"/forgot-password"} className="text-sm text-[#EEEEEE]">
              Forgot Password
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
