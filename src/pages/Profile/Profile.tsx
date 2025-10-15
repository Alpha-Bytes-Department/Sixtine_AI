import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/dashboard/chat");
  };
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="shadow-[0_0_4px_0_#00000040] px-10  lg:px-36 py-12 relative">
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
          <div>
            <Link
              to={"/dashboard/edit-profile"}
              className="border border-[#4E7BA0] text-[#4E7BA0] rounded-sm px-5 py-2 cursor-pointer transition-transform duration-200 ease-in-out  active:scale-95"
            >
              Edit profile
            </Link>
          </div>
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
            <span>abc@gmail.com</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Role</span>
            <span>Doctor</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Department</span>
            <span>Psycology</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Organization</span>
            <span>xyz health care</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Location</span>
            <span>1820, Navada, America</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Registration Date</span>
            <span>29-10-2002</span>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Last Update</span>
            <span>15-12-2025</span>
          </div>
          <div className="flex gap-12">
            <div className="">
              <Link
                to={"/dashboard/change-password"}
                className="bg-[#4E7BA0] text-white rounded-sm px-2 lg:px-8 py-2 cursor-pointer transition-transform duration-200 ease-in-out "
              >
                Change Password
              </Link>
            </div>
            <div className="">
              <Link
                to={"/dashboard/settings"}
                className="border border-[#4E7BA0] text-[#4E7BA0] rounded-sm px-5 py-2 cursor-pointer transition-transform duration-200 ease-in-out  active:scale-95"
              >
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
