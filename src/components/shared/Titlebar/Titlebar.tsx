import React from "react";
import { useStatus } from "../../../providers/StatusProvider";
import { GrLanguage } from "react-icons/gr";



const Titlebar = () => {
  const { languageStat, setLanguageStat } = useStatus();
  const {pageTitle} = useStatus();
  return (
    <div className="w-full px-6 py-3 border-b mb-4 border-gray-300">
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">{pageTitle?pageTitle:"Dashboard"}</p>
        <div className="flex gap-2 lg:gap-5 items-center">
          <div className="flex gap-1 items-center">
            <GrLanguage  className="text-lg text-[#6B6B6B]"/>
            <select
              value={languageStat}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setLanguageStat(e.target.value as "english" | "french")
              }
              className="text-[#6B6B6B] text-[8px] lg:text-base cursor-pointer outline-0"
            >
              <option value="english">EN</option>
              <option value="french">FR</option>
            </select>
          </div>
          <div>
            <img
              src="/Images/Others/demoProfile.jpg"
              alt="profile"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titlebar;
