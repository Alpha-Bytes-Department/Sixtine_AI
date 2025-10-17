import { Link, useNavigate } from "react-router";
import { RxCross2 } from "react-icons/rx";
import { useStatus } from "../../providers/StatusProvider";
// import { tr } from "motion/react-client";

const ChangePassword = () => {
  const navigate = useNavigate();
  const {isEnglish} = useStatus();

  const handleSave=()=>{
    navigate("/dashboard/profile");
  }
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="shadow-[0_0_4px_0_#00000040] p-20  lg:p-40 relative">
        <Link to={"/dashboard/profile"}>
          <RxCross2 className="absolute top-5 right-5 text-xl text-[#4E7BA0]" />
        </Link>
        <div className="flex flex-col gap-5 text-[#4A4A4A] ">
          <div className="flex flex-col gap-5">
            <span className="text-3xl  text-center font-semibold">
              {isEnglish ? "Change Password" : "Changer le mot de passe"}
            </span>
            <input
              type="text"
              className="bg-[#EAEAEA] px-2 rounded-sm py-2"
              placeholder={isEnglish ? "Old password" : "Ancien mot de passe"}
              name="update"
              required={true}
              id="update"
            />
            <input
              type="text"
              className="bg-[#EAEAEA] px-2 rounded-sm py-2"
              placeholder={isEnglish ? "New password" : "Nouveau mot de passe"}
              name="update"
              required={true}
              id="update"
            />
            <input
              type="text"
              className="bg-[#EAEAEA] px-2 rounded-sm py-2"
              placeholder={
                isEnglish ? "Confirm password" : "Confirmer le mot de passe"
              }
              name="update"
              required={true}
              id="update"
            />
          </div>
            <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-12 gap-6">
            <div className="w-full lg:w-auto">
              <button onClick={handleSave} className="bg-[#4E7BA0] text-white rounded-sm px-12 py-2 w-full cursor-pointer transition-transform duration-200 ease-in-out">
              {isEnglish ? "Save" : "Sauvegarder"}
              </button>
            </div>
            <div className="w-full lg:w-auto">
              <Link
              to={"/dashboard/profile"}
              className="border border-[#4E7BA0] text-[#4E7BA0] w-full rounded-sm px-8 py-2 cursor-pointer block text-center"
              >
              {isEnglish ? "Cancel" : "Annuler"}
              </Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
