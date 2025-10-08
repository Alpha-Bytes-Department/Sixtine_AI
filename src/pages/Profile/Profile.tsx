import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";


const Profile = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="shadow-[0_0_4px_0_#00000040] w-7/12 p-10">
        <div className="flex flex-col gap-5 text-[#4A4A4A] relative">
          <Link to={"/dashboard/add-document"}><RxCross2 className="absolute top-0 right-0 text-xl"/></Link>
          <h1 className="text-3xl">Profile</h1>
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
            <span>abc@gmail.com</span>
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
            <div className="w-40">
              <Link to={"/dashboard/edit-profile"}
                className="bg-[#4E7BA0] text-white rounded-sm px-5 py-2 cursor-pointer transition-transform duration-200 ease-in-out  active:scale-95"
              >
                Edit profile
              </Link>
            </div>
            <div className="">
              <Link to={"/dashboard/settings"}
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
