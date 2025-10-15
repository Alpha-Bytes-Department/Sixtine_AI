import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";
import { FaCamera } from "react-icons/fa";

const EditProfile = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="shadow-[0_0_4px_0_#00000040] p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative w-full max-w-2xl mx-auto">
        <Link to={"/dashboard/profile"}>
          <RxCross2 className="absolute top-5 right-5 text-xl text-[#4E7BA0]" />
        </Link>
        <div className="flex flex-col gap-5 text-[#4A4A4A]">
          <h1 className="text-2xl sm:text-3xl font-semibold">Edit Profile</h1>
          <div className="relative self-center">
            <img
              src="/Images/Others/demoProfile.jpg"
              alt="profile"
              className="h-24 w-24 rounded-full"
            />
            <p className="absolute bottom-0 left-16 bg-white rounded-full p-2 cursor-pointer">
              <FaCamera className="text-[#4E7BA0]" />
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-12">
            <span className="w-full sm:w-40 font-semibold">First name</span>
            <input
              type="text"
              className="bg-[#EAEAEA] px-2 rounded-sm py-2 w-full"
              placeholder="First name"
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-12">
            <span className="w-full sm:w-40 font-semibold">Last Name</span>
            <input
              type="text"
              className="bg-[#EAEAEA] px-2 rounded-sm py-2 w-full"
              placeholder="Last name"
              name="lastName"
              id="lastName"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-12">
            <span className="w-full sm:w-40 font-semibold">Department</span>
            <input
              type="text"
              className="bg-[#EAEAEA] px-2 rounded-sm py-2 w-full"
              placeholder="department"
              name="department"
              id="department"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-12">
            <span className="w-full sm:w-40 font-semibold">Location</span>
            <input
              type="text"
              className="bg-[#EAEAEA] px-2 rounded-sm py-2 w-full"
              placeholder="location"
              name="location"
              id="location"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-12">
            <span className="w-full sm:w-40 font-semibold">Organization</span>
            <input
              type="text"
              className="bg-[#EAEAEA] px-2 rounded-sm py-2 w-full"
              placeholder="Organization"
              name="organization"
              id="organization"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-12">
            <span className="w-full sm:w-40 font-semibold">Role</span>
            <div className="relative w-full">
              <select
              name="role"
              id="role"
              className="w-full bg-[#EAEAEA] text-gray-700 px-3 py-2 rounded-sm outline-none cursor-pointer appearance-none border-none [&>option]:bg-[#EAEAEA] [&>option]:border-none [&>option]:rounded-sm [&>option]:text-gray-700 [&>option]:p-2"
              >
              <option value="" disabled selected hidden>
                Select Role
              </option>
              <option value="doctor">Doctor</option>
              <option value="nurse">Nurse</option>
              <option value="medical assistant">Medical Assistant</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-12  mt-4">
            <button className="bg-[#4E7BA0] text-white rounded-sm px-14 py-2 cursor-pointer transition-transform duration-200 ease-in-out active:scale-95 w-full sm:w-auto">
              Save
            </button>
            <Link
              to={"/dashboard/profile"}
              className="border border-[#4E7BA0] text-[#4E7BA0] rounded-sm px-7 py-2 cursor-pointer w-full sm:w-auto text-center"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
