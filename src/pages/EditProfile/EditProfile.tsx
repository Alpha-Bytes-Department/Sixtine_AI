import {  useEffect, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import { useStatus } from "../../providers/StatusProvider";

const EditProfile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  // const {isEnglish} = useStatus();
const { setPageTitle, isEnglish ,setBreadCrumb, breadCrumb } = useStatus();
useEffect(() => {
  setPageTitle(isEnglish ? "Edit Profile" : "Modifier le profil");
  setBreadCrumb([{ title: isEnglish ? "Profile" : "Modifier le profil", link: "/dashboard/profile" },{ title: isEnglish ? "Edit Profile" : "Modifier le profil", link: "/dashboard/edit-profile" }]);
}, [isEnglish]);

  const handleSelectImage = () => {
    inputRef.current?.click();
  };

  const handleSave=()=>{
    navigate("/dashboard/profile");
  }

  return (
    <>
      <div className="py-5 ml-5">
        {breadCrumb.map((bc, index) => (
          <Link
            to={bc.link}
            key={index}
            className="text-lg text-gray-500 hover:underline mx-2 "
          >
            {bc.title} {" > "}
          </Link>
        ))}
      </div>
      <div className="flex-1 flex justify-center items-center overflow-y-auto pt-16 xl:py-20 2xl:py-0">
        <div className="shadow-[0_0_4px_0_#00000040] p-4 sm:p-8 md:p-12 lg:p-16 xl:px-16 xl:py-3  2xl:p-20 relative w-full max-w-2xl mx-auto">
          <Link to={"/dashboard/profile"}>
            <RxCross2 className="absolute top-5 right-5 text-xl text-[#4E7BA0]" />
          </Link>
          <div className="flex flex-col gap-5 text-[#4A4A4A] ">
            <h1 className="text-2xl 2xl:text-3xl font-semibold">
              {isEnglish ? "Edit Profile" : "Modifier le profil"}
            </h1>
            <div className="relative self-center">
              <img
                src="/Images/Others/demoProfile.jpg"
                alt="profile"
                className="h-24 w-24 rounded-full"
              />
              <p
                onClick={() => handleSelectImage()}
                className="absolute bottom-0 left-16 bg-white rounded-full p-2 cursor-pointer"
              >
                <FaCamera className="text-[#4E7BA0]" />
              </p>
            </div>
            <input type="file" ref={inputRef} className="hidden" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-12">
              <span className="w-full sm:w-40 font-semibold">
                {isEnglish ? "First name" : "Prénom"}
              </span>
              <input
                type="text"
                className="bg-[#EAEAEA] px-2 rounded-sm py-2 w-full"
                placeholder={isEnglish ? "First name" : "Prénom"}
                name="firstName"
                id="firstName"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-12">
              <span className="w-full sm:w-40 font-semibold">
                {isEnglish ? "Last Name" : "Nom de famille"}
              </span>
              <input
                type="text"
                className="bg-[#EAEAEA] px-2 rounded-sm py-2 w-full"
                placeholder={isEnglish ? "Last name" : "Nom de famille"}
                name="lastName"
                id="lastName"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-12">
              <span className="w-full sm:w-40 font-semibold">
                {isEnglish ? "Department" : "Département"}
              </span>
              <input
                type="text"
                className="bg-[#EAEAEA] px-2 rounded-sm py-2 w-full"
                placeholder={isEnglish ? "Department" : "Département"}
                name="department"
                id="department"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-12">
              <span className="w-full sm:w-40 font-semibold">
                {isEnglish ? "Location" : "Emplacement"}
              </span>
              <input
                type="text"
                className="bg-[#EAEAEA] px-2 rounded-sm py-2 w-full"
                placeholder={isEnglish ? "Location" : "Emplacement"}
                name="location"
                id="location"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-12">
              <span className="w-full sm:w-40 font-semibold">
                {isEnglish ? "Organization" : "Organisation"}
              </span>
              <input
                type="text"
                className="bg-[#EAEAEA] px-2 rounded-sm py-2 w-full"
                placeholder={isEnglish ? "Organization" : "Organisation"}
                name="organization"
                id="organization"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-12">
              <span className="w-full sm:w-40 font-semibold">
                {isEnglish ? "Role" : "Rôle"}
              </span>
              <div className="relative w-full">
                <select
                  name="role"
                  id="role"
                  className="w-full bg-[#EAEAEA] text-gray-700 px-3 py-2 rounded-sm outline-none cursor-pointer appearance-none border-none [&>option]:bg-[#EAEAEA] [&>option]:border-none [&>option]:rounded-sm [&>option]:text-gray-700 [&>option]:p-2"
                >
                  <option value="" disabled selected hidden>
                    {isEnglish ? "Select Role" : "Sélectionner un rôle"}
                  </option>
                  <option value="doctor">
                    {isEnglish ? "Doctor" : "Docteur"}
                  </option>
                  <option value="nurse">
                    {isEnglish ? "Nurse" : "Infirmière"}
                  </option>
                  <option value="medical assistant">
                    {isEnglish ? "Medical Assistant" : "Assistant médical"}
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12  mt-4">
              <button
                onClick={handleSave}
                className="bg-[#4E7BA0] text-white rounded-sm px-14 py-2 cursor-pointer transition-transform duration-200 ease-in-out active:scale-95 w-full sm:w-auto"
              >
                {isEnglish ? "Save" : "Sauvegarder"}
              </button>
              <Link
                to={"/dashboard/profile"}
                className="border border-[#4E7BA0] text-[#4E7BA0] rounded-sm px-7 py-2 cursor-pointer w-full sm:w-auto text-center"
              >
                {isEnglish ? "Cancel" : "Annuler"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
