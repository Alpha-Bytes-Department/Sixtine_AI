import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import { useStatus } from "../../providers/StatusProvider";
import { useEffect } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const {isEnglish, setPageTitle } = useStatus();
  useEffect(() => {
    setPageTitle(isEnglish ? "Profile" : "Profil");
  }, [isEnglish]);

  const handleGoBack = () => {
    navigate("/dashboard/chat");
  };
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="shadow-[0_0_4px_0_#00000040] px-10 xl:px-16 2xl:px-36 py-8 xl:py-3 2xl:py-12  relative">
        <button onClick={handleGoBack}>
          <RxCross2 className="absolute top-5 right-5 text-xl text-[#4e7ba0] cursor-pointer" />
        </button>
        
        <div className="flex  flex-col gap-3 2xl:gap-5 text-[#4A4A4A] ">
          <h1 className="text-2xl 2xl:text-3xl font-semibold">
            {isEnglish ? "Profile" : "Profil"}
          </h1>
          <img
            src="/Images/Others/demoProfile.jpg"
            alt="profile"
            className="h-24 w-24 rounded-full"
          />
          <div>
            <Link
              to={"/dashboard/edit-profile"}
              className="border border-[#4E7BA0] text-[#4E7BA0] rounded-sm px-5 py-2 cursor-pointer transition-transform duration-200 ease-in-out  active:scale-95"
            >
              {isEnglish ? "Edit profile" : "Modifier le profil"}
            </Link>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">
              {isEnglish ? "First name" : "Prénom"}
            </span>
            <span>Martine</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">
              {isEnglish ? "Last Name" : "Nom de famille"}
            </span>
            <span>Ndengera</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">
              {isEnglish ? "Email" : "Email"}
            </span>
            <span>abc@gmail.com</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">{isEnglish ? "Role" : "Rôle"}</span>
            <span>{isEnglish ? "Doctor" : "Docteur"}</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">
              {isEnglish ? "Department" : "Département"}
            </span>
            <span>{isEnglish ? "Psycology" : "Psychologie"}</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">
              {isEnglish ? "Organization" : "Organisation"}
            </span>
            <span>xyz health care</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">
              {isEnglish ? "Location" : "Emplacement"}
            </span>
            <span>1820, Navada, America</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">
              {isEnglish ? "Registration Date" : "Date d'inscription"}
            </span>
            <span>29-10-2002</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">
              {isEnglish ? "Last Update" : "Dernière mise à jour"}
            </span>
            <span>15-12-2025</span>
          </div>
          <div className="flex gap-12">
            <div className="">
              <Link
                to={"/dashboard/change-password"}
                className="bg-[#4E7BA0] text-white rounded-sm px-2 lg:px-8 py-2 cursor-pointer transition-transform duration-200 ease-in-out "
              >
                {isEnglish ? "Change Password" : "Changer le mot de passe"}
              </Link>
            </div>
            <div className="">
              <Link
                to={"/dashboard/settings"}
                className="border border-[#4E7BA0] text-[#4E7BA0] rounded-sm px-5 py-2 cursor-pointer transition-transform duration-200 ease-in-out  active:scale-95"
              >
                {isEnglish ? "Settings" : "Paramètres"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
