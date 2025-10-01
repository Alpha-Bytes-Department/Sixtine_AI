import { Link } from "react-router";
import { FaAngleDown } from "react-icons/fa6";



const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-2 border-[#4E7BA0] bg-[#b6d5dd] rounded-full px-2 lg:px-8 py-2 max-w-5xl mx-3 lg:mx-auto mt-3 lg:mt-10">
      <div className="flex gap-2 lg:gap-5 items-center">
        <Link className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer" to={"/mission"}>MISSION</Link>
        <Link className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer" to={"/what-we-do"}>WHAT WE DO</Link>
        <Link className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer" to={"/use-cases"}>USE CASES</Link>
      </div>
      <img src="/Images/logo/image3.png" className="w-12 h-auto lg:w-24 lg:h-14"/>
      <div className="flex gap-2 lg:gap-5 items-center">
        <Link className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer" to={"/mission"}>OUR VISSION</Link>
        <Link className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer" to={"/what-we-do"}>GET IN TOUCH</Link>
        <select name="language" id="language" className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer outline-0">
            <option value="english">EN</option>
            <option value="french">FR</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;


{/* <div className="flex items-center gap-1">
            <p className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer">En</p>
            <FaAngleDown className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer"/>
        </div> */}