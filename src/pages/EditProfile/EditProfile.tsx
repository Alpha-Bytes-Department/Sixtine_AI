import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";
import { FaCamera } from "react-icons/fa";

const EditProfile = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="shadow-[0_0_4px_0_#00000040]  p-32 relative">
        <Link to={"/dashboard/profile"}>
          <RxCross2 className="absolute top-5 right-5 text-xl text-[#4E7BA0]" />
        </Link>
        <div className="flex flex-col gap-5 text-[#4A4A4A] ">
          <h1 className="text-3xl font-semibold">Edit Profile</h1>
          <div className="relative">
            <img
              src="/Images/Others/demoProfile.jpg"
              alt="profile"
              className="h-24 w-24 rounded-full"
            />
            <p className="absolute bottom-0 left-16 bg-white rounded-full p-2 cursor-pointer">
              <FaCamera className="text-[#4E7BA0]" />
            </p>
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
          <div className="flex items-center gap-12">
            <div className="">
              <button className="bg-[#4E7BA0] text-white rounded-sm px-14 py-2 cursor-pointer transition-transform duration-200 ease-in-out  active:scale-95">
                Save
              </button>
            </div>
            <div className="">
              <Link
                to={"/dashboard/profile"}
                className="border border-[#4E7BA0] text-[#4E7BA0] rounded-sm mx-3 px-7 py-2 cursor-pointer"
              >
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
