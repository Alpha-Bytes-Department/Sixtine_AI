import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useStatus } from "../../providers/StatusProvider";
// import { i } from "motion/react-client";
// import { set } from "react-hook-form";

const PatientDetails = () => {
  const [activeTab, setActiveTab] = useState("notes");
  const navigate = useNavigate();
  const { setPageTitle, breadCrumb, setBreadCrumb, isEnglish } = useStatus();
   useEffect(()=>{
 setPageTitle(isEnglish ? "Patient Details" : "Détails du patient");
 setBreadCrumb([
   { title: isEnglish ? "Patients" : "Patients", link: "/dashboard/patients" },
   { title: isEnglish ? "Patient Details" : "Détails du patient", link: "/dashboard/patients/0" },
 ]);
   },[isEnglish])

 
  


  const notes = [
    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },
    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },
    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },
    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },
    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },
    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },
    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },
    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },
    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },

    {
      date: "02.11.2021",
      type: "reason for consultation",
      text: "Reading of the transfer letter for acute care, infectious exacerbation in the context of interstitial pneumonia.",
    },
  ];
 

  const handleViewDoc = (id: number) => {
    navigate(`/dashboard/patients/0/document/${id}`);
  };

  return (
    <div className="flex-1 h-full w-full">
      <div className="bg-white p-6 text-[#4A4A4A] h-full flex flex-col">
        {/* Header */}
        <div className="py-5">
          {breadCrumb.map((bc, index) => (
            <Link to={bc.link}  key={index} className="text-lg text-gray-500 hover:underline mx-2 ">
              {bc.title} {" > "}
            </Link>
          ))} 
        </div>
        <div className="mb-6">
          <h2 className="text-3xl font-semibold  mb-2">
            Abdessattar GHARSELAOUI
          </h2>
          <div className="space-y-2 ">
            <p>
              <strong>
                {isEnglish ? "Date of birth:" : "Date de naissance :"}
              </strong>{" "}
              05.09.1960 (65 {isEnglish ? "years old" : "ans"})
            </p>
            <p>
              <strong>{isEnglish ? "Telephone:" : "Téléphone :"}</strong> 0033
              450.99.24.64 / 076 645 60 33
            </p>
            <p>
              <strong>{isEnglish ? "Address:" : "Adresse :"}</strong> 39D,
              chemin du Jonc, 1218 GRAND-SACONNEX, LE
            </p>
            <p>
              <strong>{isEnglish ? "Email:" : "Email :"}</strong>{" "}
              <a href="mailto:a.gharselaoui@bluewin.ch" className="">
                a.gharselaoui@bluewin.ch
              </a>
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-300 flex space-x-8 mb-4 text-sm font-medium">
          <button
            onClick={() => setActiveTab("notes")}
            className={`pb-2 ${
              activeTab === "notes"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {isEnglish ? "Notes" : "Notes"}
          </button>
          <button
            onClick={() => setActiveTab("documents")}
            className={`pb-2 ${
              activeTab === "documents"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {isEnglish ? "Documents" : "Documents"}
          </button>
        </div>

        {/* Notes Table */}
        {activeTab === "notes" && (
          <div className="overflow-y-auto flex-grow">
            <table className="min-w-full text-sm table-fixed">
              <thead className="sticky top-0 bg-white text-gray-600  border-gray-200">
                <tr className="">
                  <th className="text-left p-3 font-medium w-1/6">
                    {isEnglish ? "Date" : "Date"}
                  </th>
                  <th className="text-left p-3 font-medium w-1/4">
                    {isEnglish ? "Type" : "Type"}
                  </th>
                  <th className="text-left p-3 font-medium w-auto">
                    {isEnglish ? "Text" : "Texte"}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {notes.map((note, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 text-gray-700">{note.date}</td>
                    <td className="p-3 text-gray-700">{note.type}</td>
                    <td className="p-3 text-gray-700">{note.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Documents Placeholder */}
        {activeTab === "documents" && (
          <div className="overflow-y-auto flex-grow">
            <table className="min-w-full text-sm table-fixed">
              <thead className="sticky top-0 bg-white text-gray-600  border-gray-200">
                <tr className="">
                  <th className="text-left p-3 font-medium w-1/6">
                    {isEnglish ? "File" : "Fichier"}
                  </th>
                  <th className="text-left p-3 font-medium w-auto">
                    {isEnglish ? "Title" : "Titre"}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {notes.map((note, index) => (
                  <tr
                    onClick={() => handleViewDoc(index)}
                    key={index}
                    className="hover:bg-gray-50"
                  >
                    <td className="p-3 text-red-700 text-3xl">
                      <FaFilePdf />
                    </td>
                    <td className="p-3 text-gray-700">
                      <p>{note.type}</p>
                      <p>{note.date}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDetails;
