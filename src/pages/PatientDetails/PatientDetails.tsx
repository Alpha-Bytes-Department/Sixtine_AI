
import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";

const PatientDetails = () => {
  const [activeTab, setActiveTab] = useState("notes");

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

  return (
    <div className="flex-1 h-full w-full">
      <div className="bg-white p-6 text-[#4A4A4A] h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold  mb-2">
            Abdessattar GHARSELAOUI
          </h2>
          <div className="text-sm  space-y-1">
            <p>
              <strong>Date of birth:</strong> 05.09.1960 (65 years old)
            </p>
            <p>
              <strong>Telephone:</strong> 0033 450.99.24.64 / 076 645 60 33
            </p>
            <p>
              <strong>Address:</strong> 39D, chemin du Jonc, 1218
              GRAND-SACONNEX, LE
            </p>
            <p>
              <strong>Email:</strong>{" "}
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
            Notes
          </button>
          <button
            onClick={() => setActiveTab("documents")}
            className={`pb-2 ${
              activeTab === "documents"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Documents
          </button>
        </div>

        {/* Notes Table */}
        {activeTab === "notes" && (
          <div className="overflow-y-auto flex-grow">
            <table className="min-w-full text-sm table-fixed">
              <thead className="sticky top-0 bg-white text-gray-600  border-gray-200">
                <tr className="">
                  <th className="text-left p-3 font-medium w-1/6">Date</th>
                  <th className="text-left p-3 font-medium w-1/4">Type</th>
                  <th className="text-left p-3 font-medium w-auto">Text</th>
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
                  <th className="text-left p-3 font-medium w-1/6">File</th>
                  <th className="text-left p-3 font-medium w-auto">Title</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {notes.map((note, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 text-red-700 text-3xl"><FaFilePdf /></td>
                    <td className="p-3 text-gray-700">{note.type}</td>
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
