import { RxCross2 } from "react-icons/rx";
import {  useNavigate } from "react-router";

const UserDetails = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="shadow-[0_0_4px_0_#00000040]  px-36 py-12 relative">
        <button onClick={handleGoBack}>
          <RxCross2 className="absolute top-5 right-5 text-xl text-[#4e7ba0] cursor-pointer" />
        </button>
        <div className="flex  flex-col gap-5 text-[#4A4A4A] ">
          <h1 className="text-3xl font-semibold">Profile</h1>
          <img
            src="/Images/Others/demoProfile.jpg"
            alt="profile"
            className="h-24 w-24 rounded-full"
          />
          <div className="flex gap-12">
            <span className="w-40 font-semibold">First name</span>
            <span>Martine</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Last Name</span>
            <span>Ndengera</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Email</span>
            <span>abcgangubd@gmail.com</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Registration Date</span>
            <span>29-10-2002</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Last Update</span>
            <span>15-12-2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
