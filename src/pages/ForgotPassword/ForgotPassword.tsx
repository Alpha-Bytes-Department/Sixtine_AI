import { MdOutlineMail } from "react-icons/md";
import { Form, Link, useNavigate } from "react-router";
import { useStatus } from "../../providers/StatusProvider";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { isEnglish } = useStatus();

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
          <h1 className=" text-3xl">
            {isEnglish ? "Forgot password" : "Mot de passe oublié"}
          </h1>
          <p className="text-sm text-[#EEEEEE]">
            {isEnglish
              ? "Enter your email for the verification process, we will send a 4-digit code to your email."
              : "Entrez votre e-mail pour le processus de vérification, nous enverrons un code à 4 chiffres à votre e-mail."}
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
                required={true}
                className="p-2 focus:outline-0 flex-1"
                placeholder={isEnglish ? "Email Address" : "Adresse e-mail"}
              />
            </label>
            <button
              onClick={handleContinue}
              className="bg-[#048eff] py-2 rounded-lg cursor-pointer transform active:translate-0.9"
            >
              {isEnglish ? "Continue" : "Continuer"}
            </button>
            <p className="text-sm">
              {isEnglish
                ? "Remember your password? "
                : "Vous vous souvenez de votre mot de passe ? "}
              <Link
                to={"/dashboard/login"}
                className=" text-[#EEEEEE] underline font-semibold"
              >
                {isEnglish ? "Login" : "Connexion"}
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
