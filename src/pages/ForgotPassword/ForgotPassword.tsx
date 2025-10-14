import { MdOutlineMail } from "react-icons/md";
import { Form, Link, useNavigate } from "react-router";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleContinue = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/dashboard/otp-verification");
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
        <div className="text-white max-w-[280px] space-y-4">
          <h1 className=" text-3xl">Forgot password</h1>
          <p className="text-sm text-[#EEEEEE]">
            Enter your email for the verification proccess, we will send 4
            digits code to your email.
          </p>
          <Form className="flex flex-col gap-3">
            <label
              htmlFor=""
              className="flex justify-center items-center bg-white text-[#6C7275] rounded-lg px-2"
            >
              <MdOutlineMail className="text-lg" />
              <input
                type="text"
                name="email"
                id="email"
                className="p-2 focus:outline-0 flex-1"
                placeholder="Email Address"
              />
            </label>
            <button
              onClick={handleContinue}
              className="bg-[#048eff] py-2 rounded-lg cursor-pointer transform active:translate-0.9"
            >
              Continue
            </button>
            <p className="text-sm">
              Remember your password ?{" "}
              <Link
                to={"/dashboard/login"}
                className=" text-[#EEEEEE] underline font-semibold"
              >
                login
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
