import { IoSearch, IoLogOutOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineDocumentPlus, HiOutlineMicrophone } from "react-icons/hi2";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaCaretRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { TiArrowSortedDown } from "react-icons/ti";
import Swal from "sweetalert2";

const SideNav = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTodayCollapsed, setTodayCollapsed] = useState(true);
  const [isOthersCollapsed, setOthersCollapsed] = useState(true);
  const [isUsersCollapsed, setUsersCollapsed] = useState(true);

  // navigate to chat
  const handleNavigateChat = () => navigate("/dashboard/chat");
  const handleLogout = () => {
   Swal.fire({
     title: "Are you sure?",
     text: "You will be logged out of your account.",
     icon: "warning",
     showCancelButton: true,
     confirmButtonText: "Yes, log out",
     cancelButtonText: "No, cancel"
   }).then((result) => {
     if (result.isConfirmed) {
      Swal.fire("Logged Out!", "You have been logged out.", "success");      
      navigate("/dashboard/login");

     }
   });
  }

  return (
    <div className="">
      {/* ======= Mobile Navigation Bar ======= */}
      <div className="lg:hidden bg-[#f1f1f1] w-full p-4 flex justify-between items-center border-b border-[#D9D9D9] relative z-50">
        <button
          className="text-[#4E7BA0] text-2xl transition-transform duration-300 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          {<GiHamburgerMenu />}
        </button>
        <Link to={"/"}>
        <img src="/Images/logo/img2.png" alt="logo" className="w-24 h-auto" /></Link>
      </div>
      {/* ======= Overlay for mobile ======= */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-[#4e7ba09d] bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ======= Sidebar ======= */}
      <div
        className={`fixed lg:static top-0 left-0 h-full z-50 bg-[#f1f1f1] p-4 overflow-y-auto custom-scrollbar flex flex-col items-center gap-5 transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "translate-x-0 w-64 pt-10"
            : "-translate-x-full lg:translate-x-0 lg:w-64"
        }`}
      >
        {/* ========== Close icone ========== */}
        {
          <button
            onClick={() => setIsOpen(false)}
            className={`${isOpen ? "block" : "hidden"}`}
          >
            <RxCross2 className="absolute top-5 right-5 text-xl text-[#4e7ba0] cursor-pointer" />
          </button>
        }
        {/* ========== Logo (Desktop only) ========== */}
        <div className="hidden lg:flex justify-between items-center w-full">
          <Link to={"/"}>
            <img
              src="/Images/logo/img2.png"
              alt="logo"
              className="w-20 mx-auto xl:w-32 h-auto"
            />
          </Link>
        </div>
        {/* ========== User Info ========== */}
        <div className="">
          <div className="flex justify-between items-center gap-1">
            <Link
              to={"/dashboard/profile"}
              className="text-[#4E7BA0] text-lg truncate"
            >
              MARTINE NDENGERA
            </Link>
            <button
              onClick={() => handleLogout()}
              className="cursor-pointer text-[#4E7BA0] text-xl"
            >
              <IoLogOutOutline className="text-2xl" />
            </button>
          </div>
          <div className="text-[#85AECF] mt-2.5 mb-3 flex flex-col justify-between items-center cursor-pointer">
            <div
              onClick={() => setUsersCollapsed(!isUsersCollapsed)}
              className="text-[#4E7BA0]  flex justify-between items-center cursor-pointer w-full"
            >
              <span>Synthetic Medical Practice</span>{" "}
              {isUsersCollapsed ? <FaCaretRight /> : <TiArrowSortedDown />}
            </div>
            <div
              className={`text-gray-500 ${
                isUsersCollapsed
                  ? "hidden"
                  : "h-20 overflow-y-auto custom-scrollbar"
              }`}
            >
              <p>Synthetic Medical Practice</p>
              <p>Synthetic Medical Practice</p>
              <p>Synthetic Medical Practice</p>
              <p>Synthetic Medical Practice</p>
              <p>Synthetic Medical Practice</p>
            </div>
          </div>
          <button
            onClick={handleNavigateChat}
            className="bg-[#4E7BA0] text-white rounded-sm w-full py-1 cursor-pointer transition-transform duration-200 ease-in-out active:scale-95"
          >
            New Chat
          </button>
        </div>

        {/* ========== Assistant Section ========== */}
        <div className="w-full">
          <h1 className="text-xl text-[#4E7BA0] mb-2">Assistant</h1>
          <div className="flex flex-col gap-2">
            <NavLink
              to={"/dashboard/add-document"}
              className={({ isActive }) =>
                `flex gap-2 items-center rounded-sm text-[#4E7BA0] px-2 py-1 ${
                  isActive ? "bg-[#C0E0FA]" : ""
                }`
              }
            >
              <HiOutlineDocumentPlus className="text-2xl" />
              <p>Add Document</p>
            </NavLink>
            <NavLink
              to={"/dashboard/add-consultion"}
              className={({ isActive }) =>
                `flex gap-2 items-center rounded-sm text-[#4E7BA0] px-2 py-1 ${
                  isActive ? "bg-[#C0E0FA]" : ""
                }`
              }
            >
              <HiOutlineMicrophone className="text-2xl" />
              <p>Add Consultation</p>
            </NavLink>
            <NavLink
              to={"/dashboard/chat"}
              className={({ isActive }) =>
                `flex gap-2 items-center rounded-sm text-[#4E7BA0] px-2 py-1 ${
                  isActive ? "bg-[#C0E0FA]" : ""
                }`
              }
            >
              <LuMessageCircleMore className="text-2xl" />
              <p>Chats</p>
            </NavLink>
          </div>
        </div>
        <hr className="border-[#D9D9D9]  w-full" />
        {/* ========== Admin Section ========== */}
        <div className="w-full">
          <h1 className="text-xl text-[#4E7BA0] mb-2">Admin</h1>
          <div className="flex flex-col gap-2">
            <NavLink
              to={"/dashboard/users"}
              className={({ isActive }) =>
                `flex gap-3 items-center rounded-sm text-[#4E7BA0] px-2 py-1 ${
                  isActive ? "bg-[#C0E0FA]" : ""
                }`
              }
            >
              <p>User</p>
            </NavLink>
            <NavLink
              to={"/dashboard/patients"}
              className={({ isActive }) =>
                `flex gap-3 items-center rounded-sm text-[#4E7BA0] px-2 py-1 ${
                  isActive ? "bg-[#C0E0FA]" : ""
                }`
              }
            >
              <p>Patients</p>
            </NavLink>
            <NavLink
              to={"/dashboard/forms"}
              className={({ isActive }) =>
                `flex gap-3 items-center rounded-sm text-[#4E7BA0] px-2 py-1 ${
                  isActive ? "bg-[#C0E0FA]" : ""
                }`
              }
            >
              <p>Forms</p>
            </NavLink>
          </div>
        </div>
        <hr className="border-[#D9D9D9]  w-full" />
        {/* ========== Bottom Buttons ========== */}
        <Link
          to={"/dashboard/chats-history"}
          className="bg-[#4E7BA0] text-white rounded-sm w-full px-2 py-1 text-left cursor-pointer"
        >
          Chats History
        </Link>
        {/*=================== Search Bar =================== */}
        <div className="w-full">
          <div className="flex items-center bg-[#4E7BA080] text-white gap-2 p-2 rounded">
            <IoSearch className="text-lg" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-sm border-0 text-white bg-transparent w-full focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full">
          <div>
            <div
              onClick={() => setTodayCollapsed(!isTodayCollapsed)}
              className="text-[#4E7BA0] flex justify-between items-center cursor-pointer w-full"
            >
              <span>Today</span>{" "}
              {isTodayCollapsed ? <FaCaretRight /> : <TiArrowSortedDown />}
            </div>
            <div
              className={`text-gray-500 ${isTodayCollapsed ? "hidden" : ""}`}
            >
              Today's record will show here
            </div>
          </div>
          <div>
            <div
              onClick={() => setOthersCollapsed(!isOthersCollapsed)}
              className="text-[#4E7BA0]  flex justify-between items-center cursor-pointer w-full"
            >
              <span>Others</span>{" "}
              {isOthersCollapsed ? <FaCaretRight /> : <TiArrowSortedDown />}
            </div>
            <div
              className={`text-gray-500 ${isOthersCollapsed ? "hidden" : ""}`}
            >
              Others record will show here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
