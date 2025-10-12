import { IoLogOutOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SideNav = () => {
  const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

  const handleNavigateChat = () => {
    navigate("/dashboard/chat");
  };

  return (
    <div className="bg-[#f1f1f1] w-72 p-3 h-full flex flex-col  items-center gap-5  left-0">
      <div>
        <img
          src="/Images/logo/img2.png"
          alt="logo"
          className="w-40 h-auto"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex justify-between items-center gap-1">
            <Link
              to={"/dashboard/profile"}
              className="text-[#4E7BA0] text-xl truncate w-60"
            >
              MARTINE NDENGERA
            </Link>
            <button className="cursor-pointer text-[#4E7BA0] text-xl">
              <IoLogOutOutline />
            </button>
          </div>
          <div className="text-[#85AECF] mt-2.5 mb-3 flex justify-between items-center cursor-pointer">
            <span>History</span> <FaCaretRight />
          </div>
          <button
            onClick={handleNavigateChat}
            className="bg-[#4E7BA0] text-white rounded-sm w-full py-1 cursor-pointer transition-transform duration-200 ease-in-out active:scale-95"
          >
            New Chat
          </button>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-[#4E7BA0]">Assistant</h1>
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
          <p className="border-b-2 border-[#D9D9D9] my-3"></p>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl text-[#4E7BA0]">Admin</h1>
            <div className="flex flex-col gap-2">
              <NavLink
                to={"/dashboard/users"}
                className={() =>
                  `flex gap-3 items-center rounded-sm text-[#4E7BA0]`
                }
              >
                <p>User</p>
              </NavLink>
              <NavLink
                to={"/dashboard/patients"}
                className={() =>
                  `flex gap-3 items-center rounded-sm text-[#4E7BA0]`
                }
              >
                <p>Patients</p>
              </NavLink>
              <NavLink
                to={"/dashboard/forms"}
                className={() =>
                  `flex gap-3 items-center rounded-sm text-[#4E7BA0]`
                }
              >
                <p>Forms</p>
              </NavLink>
            </div>
          </div>
          <p className="border-b-2 border-[#D9D9D9] mt-3"></p>
        </div>
        <Link
          to={"/dashboard/chats-history"}
          className="bg-[#4E7BA0] text-white rounded-sm w-full px-2 py-1 text-left cursor-pointer"
        >
          Chats History
        </Link>
        {/* Search Bar */}
        <div className="mb-4">
          <div className="flex items-center bg-[#4E7BA080] text-white w-64 gap-2 p-2 rounded">
            <IoSearch className="text-lg" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" text-sm border-0 text-white rounded-md focus:outline-none "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
