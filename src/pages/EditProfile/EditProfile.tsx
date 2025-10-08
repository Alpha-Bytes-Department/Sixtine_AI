import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";
import { FaCamera } from "react-icons/fa";

const EditProfile = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="shadow-[0_0_4px_0_#00000040] w-7/12 p-10">
        <div className="flex flex-col gap-5 text-[#4A4A4A] relative">
          <Link to={"/dashboard/add-document"}>
            <RxCross2 className="absolute top-0 right-0 text-xl" />
          </Link>
          <h1 className="text-3xl">Profile</h1>
          <div className="relative">
            <img
              src="/Images/Others/demoProfile.jpg"
              alt="profile"
              className="h-24 w-24 rounded-full"
            />
            <p className="absolute bottom-0 left-16 bg-white rounded-full p-2 cursor-pointer"><FaCamera className="text-[#4E7BA0]" /></p>
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">First name</span>
            <input
              type="text"
              className="bg-[#EAEAEA] px-2 rounded-sm py-2"
              placeholder="First name"
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Last Name</span>
            <input
              type="text"
              className="bg-[#EAEAEA] px-2 rounded-sm py-2"
              placeholder="Last name"
              name="lastName"
              id="lastName"
            />
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Email</span>
            <input
              type="text"
              className="bg-[#EAEAEA] px-2 rounded-sm py-2"
              placeholder="abc@gmail.com"
              name="email"
              id="email"
            />
          </div>
          <div className="flex gap-12">
            <span className="w-40 font-semibold">Change Password</span>
            <div className="flex flex-col gap-5">
              <input
                type="text"
                className="bg-[#EAEAEA] px-2 rounded-sm py-2"
                placeholder="Old password"
                name="update"
                id="update"
              />
              <input
                type="text"
                className="bg-[#EAEAEA] px-2 rounded-sm py-2"
                placeholder="New password"
                name="update"
                id="update"
              />
              <input
                type="text"
                className="bg-[#EAEAEA] px-2 rounded-sm py-2"
                placeholder="Confirm password"
                name="update"
                id="update"
              />
            </div>
          </div>
          <div className="flex gap-12">
            <div className="w-40">
              <button className="bg-[#4E7BA0] text-white rounded-sm px-5 py-2 cursor-pointer transition-transform duration-200 ease-in-out  active:scale-95">
                Save
              </button>
            </div>
            <div className="">
              <Link to={"/dashboard/profile"} className="border border-[#4E7BA0] text-[#4E7BA0] rounded-sm px-5 py-2 cursor-pointer">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
