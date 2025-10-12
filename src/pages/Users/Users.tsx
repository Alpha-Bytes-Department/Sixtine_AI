import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();



  const handleNavigate = () => {  
    navigate(`/dashboard/profile`);
   }

  const patients = Array(30).fill({
    firstName: "Abdessattar",
    lastName: "GHARSELAOUI",
    doc: "3 months ago",
    role: "user",
  });

  const filteredPatients = patients.filter(
    (p) =>
      p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 p-6 bg-white text-[#4A4A4A] h-full flex flex-col gap-5">
      <h2 className="text-3xl font-semibold mb-3">Users</h2>
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
          <table className="w-full text-left">
            <thead className="sticky top-0 bg-white border-b">
              <tr>
                <th className=" py-2 font-semibold">First Name</th>
                <th className=" py-2 font-semibold">Last Name</th>
                <th className=" py-2 font-semibold">Date Created</th>
                <th className=" py-2 font-semibold">Role</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-gray-50 transition-colors"
                  onClick={()=>handleNavigate()}
                >
                  <td className=" py-2 cursor-pointer">
                    {patient.firstName}
                  </td>
                  <td className=" py-2 cursor-pointer">
                    {patient.lastName}
                  </td>
                  <td className=" py-2">{patient.doc}</td>
                  <td className=" py-2">{patient.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
