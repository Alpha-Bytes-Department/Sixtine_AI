import { Form, useNavigate } from "react-router";
import { useStatus } from "../../../providers/StatusProvider";
import { useRef } from "react";
import { motion } from "motion/react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  role: string;
  subscribe: boolean;
  earlyAccess: boolean;
}

interface HandleSubmitEvent extends React.MouseEvent<HTMLButtonElement> {
  preventDefault: () => void;
}

const GetInTouch = () => {
  const { isEnglish } = useStatus();
  const navigate = useNavigate();

  const formDataRef = useRef<FormData>({
    name: "",
    email: "",
    phone: "",
    role: "patients",
    subscribe: false,
    earlyAccess: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    formDataRef.current = {
      ...formDataRef.current,
      [name]: type === "checkbox" ? checked : value,
    };
  };

  const handleSubmit = (e: HandleSubmitEvent) => {
    e.preventDefault();
    navigate("/dashboard/login");
  };

  return (
    <div id="getInTouch" className="bg-[#9dbed5] py-20 relative overflow-hidden">
      {/* looper top  */}
      <img
        src="/Images/logo/Looper1.png"
        className="absolute h-auto rounded-full w-1/5 -top-5 -left-5 sm:-top-8 sm:-left-8 md:-top-12 md:-left-12 lg:-top-20 lg:-left-20 xl:-top-32 xl:-left-32 2xl:-left-40 2xl:-top-40 animate-[spin_15s_linear_infinite]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-12 w-11/12 sm:w-10/12 xl:w-7/12 text-center mx-auto"
      >
        {/* title  */}
        <div className="flex flex-col justify-center items-center ">
          <p className="inter text-2xl text-[#0D63AA]">
            {isEnglish ? "GET IN TOUCH" : "ENTRER EN CONTACT"}
          </p>
          <p>
            <svg
              className="w-[190px] h-[14px] " // Tailwind sizing
              viewBox="0 0 190 14"
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
        <p className="text-[#0D63AA] font-semibold text-2xl">
          {isEnglish
            ? "Join our early access list"
            : "Rejoignez notre liste d'accès anticipé"}
        </p>
        <Form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-left">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-white font-medium mb-2 text-2xl"
              >
                {isEnglish ? "Name" : "Nom"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                placeholder={isEnglish ? "Your name" : "Votre nom"}
                className="px-4 py-3 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-white font-medium mb-2 text-2xl"
              >
                {isEnglish ? "Email" : "Email"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder={
                  isEnglish ? "you@clinic.example" : "vous@clinique.exemple"
                }
                className="px-4 py-3 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 text-left">
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-white font-medium mb-2 text-2xl"
              >
                {isEnglish ? "Phone" : "Téléphone"}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                placeholder={isEnglish ? "Phone" : "Téléphone"}
                className="px-4 py-3 rounded-lg text-sm bg-white text-gray-800 placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="role"
                className="text-white font-medium mb-2 text-2xl"
              >
                {isEnglish ? "Role" : "Rôle"}
              </label>
              <select
                id="role"
                name="role"
                onChange={handleChange}
                className="px-4 py-3 rounded-lg text-sm bg-white text-gray-800 cursor-pointer border-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                <option value="patients">
                  {isEnglish ? "Patients" : "Patients"}
                </option>
                <option value="doctor">
                  {isEnglish ? "Doctor" : "Médecin"}
                </option>
                <option value="admin">
                  {isEnglish ? "Administrator" : "Administrateur"}
                </option>
              </select>
            </div>
          </div>

          <div className="my-6">
            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                onChange={handleChange}
                className="w-5 h-5 mr-3 cursor-pointer"
              />
              <label
                htmlFor="subscribe"
                className="text-white text-sm cursor-pointer"
              >
                {isEnglish
                  ? "Subscribe to updates"
                  : "Abonnez-vous aux mises à jour"}
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="earlyAccess"
                name="earlyAccess"
                onChange={handleChange}
                className="w-5 h-5 mr-3 cursor-pointer"
              />
              <label
                htmlFor="earlyAccess"
                className="text-white text-sm cursor-pointer"
              >
                {isEnglish
                  ? "I want early access (fill the extra fields below)"
                  : "Je souhaite un accès anticipé (remplissez les champs supplémentaires ci-dessous)"}
              </label>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleSubmit}
              className="bg-[#0d63aa] text-white font-semibold px-8 py-3 rounded-lg  cursor-pointer"
            >
              {isEnglish ? "Request access" : "Demander l'accès"}
            </button>
          </div>
        </Form>
      </motion.div>
      {/* looper bottom  */}
      <img
        src="/Images/logo/Looper1.png"
        className="absolute h-auto rounded-full w-1/5 -bottom-5 -right-5 sm:-bottom-8 sm:-right-8 md:-bottom-12 md:-right-12 lg:-bottom-20 lg:-right-20 xl:-bottom-32 xl:-right-32 2xl:-right-40 2xl:-bottom-40 animate-[spin_15s_linear_infinite]"
      />
    </div>
  );
};

export default GetInTouch;
