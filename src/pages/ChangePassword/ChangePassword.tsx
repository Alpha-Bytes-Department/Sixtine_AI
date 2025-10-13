import { Link } from "react-router";
import { RxCross2 } from "react-icons/rx";

const ChangePassword = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="shadow-[0_0_4px_0_#00000040] w-7/12 p-40 relative">
        <Link to={"/dashboard/profile"}>
          <RxCross2 className="absolute top-5 right-5 text-xl text-[#4E7BA0]" />
        </Link>
        <div className="flex flex-col gap-5 text-[#4A4A4A] ">
          <div className="flex flex-col gap-5">
            <span className="text-3xl font-semibold">Change Password</span>
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
          <div className="flex items-center gap-12 ">
            <div className="">
              <button className="bg-[#4E7BA0] text-white rounded-sm px-12 py-2 cursor-pointer transition-transform duration-200 ease-in-out  active:scale-95">
                Save
              </button>
            </div>
            <div className="">
              <Link
                to={"/dashboard/profile"}
                className="border border-[#4E7BA0] text-[#4E7BA0] rounded-sm px-12 py-2 cursor-pointer"
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

export default ChangePassword;
