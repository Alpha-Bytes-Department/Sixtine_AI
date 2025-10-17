// import { div } from "motion/react-client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FiEdit3, FiCheck, FiX } from "react-icons/fi";
import { useNavigate } from "react-router";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { useStatus } from "../../providers/StatusProvider";

const Users = () => {
  const { setPageTitle } = useStatus();
  setPageTitle("Users");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState<number | null>(null);
  const [editedData, setEditedData] = useState({
    firstName: "",
    lastName: "",
    role: "",
  });
  const [patients, setPatients] = useState(
    Array(30)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        firstName: "Abdessattar",
        lastName: "GHARSELAOUI",
        doc: "3 months ago",
        role: "doctor",
        certification: "PDF",
      }))
  );
  const navigate = useNavigate();
  const {isEnglish} = useStatus();

  const handleNavigate = (id: number) => {
    if (editingUser === null) {
      navigate(`/dashboard/users/${id}`);
    }
  };

  const handleEdit = (idx: number, user: any) => {
    setEditingUser(idx);
    setEditedData({
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    });
  };

  const handleSave = (idx: number) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient, index) =>
        index === idx
          ? {
              ...patient,
              firstName: editedData.firstName,
              lastName: editedData.lastName,
              role: editedData.role,
            }
          : patient
      )
    );
    setEditingUser(null);
    setEditedData({ firstName: "", lastName: "", role: "" });
  };

  const handleCancel = () => {
    setEditingUser(null);
    setEditedData({ firstName: "", lastName: "", role: "" });
  };

  const filteredPatients = patients.filter(
    (p) =>
      p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 p-6 bg-white text-[#4A4A4A] h-full flex flex-col gap-5 ">
      <h2 className="text-3xl font-semibold mb-3">
        {isEnglish ? "Users" : "Utilisateurs"}
      </h2>
      {/* Search Bar */}
      <div className="mb-4">
        <div className="flex items-center bg-[#DBDBDB] w-64 gap-2 p-2 rounded">
          <IoSearch className="text-lg" />
          <input
            type="text"
            placeholder={isEnglish ? "Search" : "Rechercher"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" text-sm border-0 rounded-md focus:outline-none "
          />
        </div>
      </div>

      {/* Table */}
      <div className="flex-grow custom-scrollbar overflow-y-auto">
        <div className="relative">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-full">
              <thead className="sticky top-0 bg-white hidden md:table-header-group border-b">
                <tr>
                  <th className="py-2 font-semibold px-2 sm:px-4">
                    {isEnglish ? "First Name" : "Prénom"}
                  </th>
                  <th className="py-2 font-semibold px-2 sm:px-4">
                    {isEnglish ? "Last Name" : "Nom de famille"}
                  </th>
                  <th className="py-2 font-semibold px-2 sm:px-4">
                    {isEnglish ? "Date Created" : "Date de création"}
                  </th>
                  <th className="py-2 font-semibold px-2 sm:px-4">
                    {isEnglish ? "Role" : "Rôle"}
                  </th>
                  <th className="py-2 font-semibold px-2 sm:px-4">
                    {isEnglish ? "Certification" : "Certification"}
                  </th>
                </tr>
              </thead>
              <tbody className=" hidden md:table-row-group">
                {filteredPatients.map((patient, idx) => (
                  <tr
                    key={idx}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-2 px-2 sm:px-4 truncate min-w-[100px]">
                      {editingUser === idx ? (
                        <input
                          type="text"
                          value={editedData.firstName}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              firstName: e.target.value,
                            })
                          }
                          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                      ) : (
                        <span
                          className="cursor-pointer"
                          onClick={() => handleNavigate(idx)}
                        >
                          {patient.firstName}
                        </span>
                      )}
                    </td>
                    <td className="py-2 px-2 sm:px-4 truncate min-w-[100px]">
                      {editingUser === idx ? (
                        <input
                          type="text"
                          value={editedData.lastName}
                          onChange={(e) =>
                            setEditedData({
                              ...editedData,
                              lastName: e.target.value,
                            })
                          }
                          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                      ) : (
                        <span
                          className="cursor-pointer"
                          onClick={() => handleNavigate(idx)}
                        >
                          {patient.lastName}
                        </span>
                      )}
                    </td>
                    <td className="py-2 px-2 sm:px-4 min-w-[120px]">
                      {patient.doc}
                    </td>
                    <td className="py-2 px-2 sm:px-4 min-w-[80px]">
                      <div className="flex items-center gap-10">
                        {editingUser === idx ? (
                          <select
                            value={editedData.role}
                            onChange={(e) =>
                              setEditedData({
                                ...editedData,
                                role: e.target.value,
                              })
                            }
                            className="border border-gray-300 rounded px-2 py-1 text-sm"
                          >
                            <option value="doctor">
                              {isEnglish ? "Doctor" : "Docteur"}
                            </option>
                            <option value="nurse">
                              {isEnglish ? "Nurse" : "Infirmière"}
                            </option>
                            <option value="admin">
                              {isEnglish ? "Admin" : "Admin"}
                            </option>
                            <option value="patient">
                              {isEnglish ? "Patient" : "Patient"}
                            </option>
                          </select>
                        ) : (
                          <span>{patient.role}</span>
                        )}

                        {editingUser === idx ? (
                          <div className="flex gap-2 ml-2">
                            <button
                              onClick={() => handleSave(idx)}
                              className="text-green-600 hover:text-green-800 transition-colors"
                            >
                              <FiCheck size={16} />
                            </button>
                            <button
                              onClick={handleCancel}
                              className="text-red-600 hover:text-red-800 transition-colors"
                            >
                              <FiX size={16} />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleEdit(idx, patient)}
                            className="text-blue-600 flex font-light gap-4 hover:text-blue-800 transition-colors ml-2"
                          >
                            <FaRegEdit size={16} /> {isEnglish ? "Edit" : "Modifier"}
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="py-2 px-2 sm:px-4 min-w-[100px]">
                      <a href="/Certificate.pdf" target="_blank">
                        <span className="text-[#4e7ba0] flex gap-2 text-lg cursor-pointer curso">
                          <BsFileEarmarkPdfFill color="red" size={24} />{" "}
                          {patient.certification}
                        </span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="md:hidden">
              {filteredPatients.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                  {isEnglish ? "No users found." : "Aucun utilisateur trouvé."}
                </div>
              ) : (
                <div>
                  {filteredPatients.map((patient, idx) => (
                    <div
                      key={idx}
                      className="border-b hover:bg-gray-50 transition-colors p-3"
                    >
                      <div className="py-2 px-2 sm:px-4 text-start truncate min-w-[100px]">
                        <span className="font-semibold pr-3">
                          {isEnglish ? "First Name:" : "Prénom :"}
                        </span>
                        {editingUser === idx ? (
                          <input
                            type="text"
                            value={editedData.firstName}
                            onChange={(e) =>
                              setEditedData({
                                ...editedData,
                                firstName: e.target.value,
                              })
                            }
                            className="border border-gray-300 rounded px-2 py-1 text-sm ml-2"
                          />
                        ) : (
                          <span
                            className="cursor-pointer"
                            onClick={() => handleNavigate(idx)}
                          >
                            {patient.firstName}
                          </span>
                        )}
                      </div>
                      <div className="py-2 px-2 sm:px-4 truncate min-w-[100px]">
                        <span className="font-semibold pr-3">
                          {isEnglish ? "Last Name:" : "Nom de famille :"}
                        </span>
                        {editingUser === idx ? (
                          <input
                            type="text"
                            value={editedData.lastName}
                            onChange={(e) =>
                              setEditedData({
                                ...editedData,
                                lastName: e.target.value,
                              })
                            }
                            className="border border-gray-300 rounded px-2 py-1 text-sm ml-2"
                          />
                        ) : (
                          <span
                            className="cursor-pointer"
                            onClick={() => handleNavigate(idx)}
                          >
                            {patient.lastName}
                          </span>
                        )}
                      </div>
                      <div className="py-2 px-2 sm:px-4 min-w-[120px]">
                        <span className="font-semibold pr-3">
                          {isEnglish ? "Date Created:" : "Date de création :"}
                        </span>{" "}
                        {patient.doc}
                      </div>
                      <div className="py-2 px-2 sm:px-4 min-w-[80px] flex items-center justify-between">
                        <div>
                          <span className="font-semibold pr-3">
                            {isEnglish ? "Role:" : "Rôle :"}
                          </span>
                          {editingUser === idx ? (
                            <select
                              value={editedData.role}
                              onChange={(e) =>
                                setEditedData({
                                  ...editedData,
                                  role: e.target.value,
                                })
                              }
                              className="border border-gray-300 rounded px-2 py-1 text-sm ml-2"
                            >
                              <option value="doctor">
                                {isEnglish ? "Doctor" : "Docteur"}
                              </option>
                              <option value="nurse">
                                {isEnglish ? "Nurse" : "Infirmière"}
                              </option>
                              <option value="admin">
                                {isEnglish ? "Admin" : "Admin"}
                              </option>
                              <option value="patient">
                                {isEnglish ? "Patient" : "Patient"}
                              </option>
                            </select>
                          ) : (
                            patient.role
                          )}
                        </div>
                        {editingUser === idx ? (
                          <div className="flex gap-3">
                            <button
                              onClick={() => handleSave(idx)}
                              className="text-green-600 hover:text-green-800 transition-colors flex items-center gap-1"
                            >
                              <FiCheck size={16} /> {isEnglish ? "Save" : "Sauvegarder"}
                            </button>
                            <button
                              onClick={handleCancel}
                              className="text-red-600 hover:text-red-800 transition-colors flex items-center gap-1"
                            >
                              <FiX size={16} /> {isEnglish ? "Cancel" : "Annuler"}
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleEdit(idx, patient)}
                            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                          >
                            <FiEdit3 size={16} /> {isEnglish ? "Edit" : "Modifier"}
                          </button>
                        )}
                      </div>
                      <div className="py-2 flex items-center gap-4 px-2 sm:px-4 min-w-[100px]">
                        <span className="font-semibold pr-3">
                          {isEnglish ? "Certification:" : "Certification :"}
                        </span>
                        <a href="/Certificate.pdf" target="_blank">
                          <span className="text-[#4e7ba0] flex gap-2 text-lg  cursor-pointer hover:underline">
                            <BsFileEarmarkPdfFill color="red" size={24} />{" "}
                            {patient.certification}
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
