import { useState } from "react";
import { FiLock } from "react-icons/fi";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Form, useNavigate } from "react-router";
import { useStatus } from "../../providers/StatusProvider";

const SetNewPassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { isEnglish } = useStatus();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    // maching password
    if (newPassword !== confirmPassword) {
      setError(
        isEnglish
          ? "Passwords do not match."
          : "Les mots de passe ne correspondent pas."
      );
      return;
    }

    // password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      setError(
        isEnglish
          ? "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
          : "Le mot de passe doit comporter au moins 8 caractères et inclure une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial."
      );
      return;
    }

    navigate("/dashboard/password-update/successful");
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
        <div className="text-white space-y-4 max-w-[300px]">
          <h1 className=" text-3xl">
            {isEnglish ? "New Password" : "Nouveau mot de passe"}
          </h1>
          <p className="text-sm text-[#EEEEEE]">
            {isEnglish
              ? "Set the new password for your account so you can login and access all features."
              : "Définissez le nouveau mot de passe pour votre compte afin de pouvoir vous connecter et accéder à toutes les fonctionnalités."}
          </p>
          <Form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
            <label
              htmlFor=""
              className="flex justify-center items-center bg-white text-[#6C7275] rounded-lg px-2"
            >
              <FiLock className="text-lg" />
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                required={true}
                className="p-2 focus:outline-0 flex-1"
                placeholder={
                  isEnglish
                    ? "Enter new password"
                    : "Entrez le nouveau mot de passe"
                }
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {showNewPassword ? (
                <HiOutlineEyeOff
                  onClick={() => setShowNewPassword(false)}
                  className="cursor-pointer text-lg"
                />
              ) : (
                <HiOutlineEye
                  onClick={() => setShowNewPassword(true)}
                  className="cursor-pointer text-lg"
                />
              )}
            </label>
            <label
              htmlFor=""
              className="flex justify-center items-center bg-white text-[#6C7275] rounded-lg px-2"
            >
              <FiLock className="text-lg" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                required={true}
                className="p-2 focus:outline-0 flex-1"
                placeholder={
                  isEnglish ? "Confirm Password" : "Confirmez le mot de passe"
                }
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {showConfirmPassword ? (
                <HiOutlineEyeOff
                  onClick={() => setShowConfirmPassword(false)}
                  className="cursor-pointer text-lg"
                />
              ) : (
                <HiOutlineEye
                  onClick={() => setShowConfirmPassword(true)}
                  className="cursor-pointer text-lg"
                />
              )}
            </label>
            {error && <p className="text-sm text-[#FF9F9F]">{error}</p>}
            <button
              type="submit"
              className="bg-[#048eff] py-2 rounded-lg cursor-pointer transform active:translate-0.9"
            >
              {isEnglish ? "Update password" : "Mettre à jour le mot de passe"}
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
