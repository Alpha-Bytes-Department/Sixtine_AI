import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router";

const PatientsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();



  const handleNavigate = (id:number) => {  
    navigate(`/dashboard/patients/${id}`);
   }

  const patients = Array(30).fill({
    firstName: "Abdessattar",
    lastName: "GHARSELAOUI",
    dob: "05.09.1960",
    created: "3 months ago",
  });

  const filteredPatients = patients.filter(
    (p) =>
      p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 p-6 bg-white text-[#4A4A4A] h-full flex flex-col gap-5">
      <h2 className="text-3xl font-semibold mb-3">Patients</h2>
      {/* Search Bar */}
      <div className="mb-4">
        <div className="flex items-center bg-[#DBDBDB] w-64 gap-2 p-2 rounded">
            <IoSearch className="text-lg"/>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" text-sm border-0 rounded-md focus:outline-none "
          />
        </div>
      </div>

      {/* Table */}
      <div className="flex-grow overflow-y-auto">
        <div className="relative">
          <table className="w-full hidden md:table text-left">
            <thead className="sticky top-0 bg-white border-b">
              <tr>
                <th className=" py-2 font-semibold">First Name</th>
                <th className=" py-2 font-semibold">Last Name</th>
                <th className=" py-2 font-semibold">Date of Birth</th>
                <th className=" py-2 font-semibold">Date Created</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-gray-50 transition-colors"
                  onClick={()=>handleNavigate(idx)}
                >
                  <td className=" py-2 cursor-pointer">
                    {patient.firstName}
                  </td>
                  <td className=" py-2 cursor-pointer">
                    {patient.lastName}
                  </td>
                  <td className=" py-2">{patient.dob}</td>
                  <td className=" py-2">{patient.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="md:hidden"></div>
            {filteredPatients.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                No patients found.
              </div>
            ) : (
              <div>
                {filteredPatients.map((patient, idx) => (
                  <div
                    key={idx} onClick={() => handleNavigate(idx)}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <div className="py-2 cursor-pointer px-2 sm:px-4 text-start truncate min-w-[100px]">
                      <span className="font-semibold pr-3">First Name:</span> {patient.firstName}
                    </div>
                    <div className="py-2 cursor-pointer px-2 sm:px-4 truncate min-w-[100px]">
                      <span className="font-semibold pr-3">Last Name:</span> {patient.lastName}
                    </div>
                    <div className="py-2 px-2 sm:px-4 min-w-[120px]">
                      <span className="font-semibold pr-3">Date of Birth:</span> {patient.dob}
                    </div>
                    <div className="py-2 px-2 sm:px-4 min-w-[120px]">
                      <span className="font-semibold pr-3">Date Created:</span> {patient.created}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
     
    </div>
  );
};

export default PatientsTable;
