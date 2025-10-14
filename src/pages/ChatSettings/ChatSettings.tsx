import { details } from "motion/react-client";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

// Define the possible tool keys as a type
type Tools = {
  createAttributes: boolean;
  searchPatients: boolean;
  getPatient: boolean;
  createPatient: boolean;
  updatePatient: boolean;
  createDocument: boolean;
  createSummary: boolean;
  openInOpenoffice: boolean;
  searchDoctorDirectory: boolean;
  sendNotification: boolean;
};

const ChatSettings = ({setSetting}:{setSetting:React.Dispatch<React.SetStateAction<boolean>>}) => {
  // Explicitly define the type for the 'tools' state
  const [model, setModel] = useState("Openai-gpt-5");
  const [audioSource, setAudioSource] = useState("Unknown device");

  // Explicitly type the tools state
  const [tools, setTools] = useState<Tools>({
    createAttributes: true,
    searchPatients: true,
    getPatient: true,
    createPatient: false,
    updatePatient: false,
    createDocument: false,
    createSummary: false,
    openInOpenoffice: false,
    searchDoctorDirectory: false,
    sendNotification: false,
  });

  // Handle checkbox state changes
  const handleCheckboxChange = (tool: keyof Tools) => {
    setTools((prevTools) => ({
      ...prevTools,
      [tool]: !prevTools[tool], // Use the key of the tools type
    }));
  };

  return (
    <div className="h-full w-full bg-[#00000099] text-[#4A4A4A] ">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto flex flex-col justify-center  gap-5 mt-10">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold ">Settings</h2>
          <button className="cursor-pointer" onClick={()=>setSetting(false)}>
            <RxCross1 />
          </button>
        </div>
        {/* break line  */}
        <p className="border border-[#D9D9D9] "></p>
        {/* Model Dropdown */}
        <div className=" flex  items-center  gap-2">
          <label className="block text-2xl font-semibold w-64">Model</label>
          <select
            className="mt-1 block  px-5 py-2 rounded-md bg-[#4e7ba0] border-0 focus:outline-0 text-white "
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="Openai-gpt-5">Openai-gpt-5</option>
            <option value="Openai-gpt-4">Openai-gpt-4</option>
            <option value="Custom-model">Custom-model</option>
          </select>
        </div>
        {/* break line  */}
        <p className="border border-[#D9D9D9] "></p>
        {/* Audio Source Dropdown */}
        <div className=" flex  items-center gap-2">
          <label className="block text-2xl font-semibold w-64">
            Audio Source
          </label>
          <select
            className="mt-1 block px-5 py-2 rounded-md bg-[#4e7ba0] border-0 focus:outline-0 text-white"
            value={audioSource}
            onChange={(e) => setAudioSource(e.target.value)}
          >
            <option value="Unknown device">Unknown device</option>
            <option value="Device 1">Device 1</option>
            <option value="Device 2">Device 2</option>
          </select>
        </div>

        {/* Tools Section */}
        <div className="">
          <h3 className="text-lg font-semibold">Tools</h3>
          <div className="space-y-2">
            {[
              { label: "Create Attributes", key: "createAttributes", details: "Create the document attributes" },
              { label: "Search Patients", key: "searchPatients", details: "Search for patients (any fields, allows small typos, does not return the complete patient)" },
              { label: "Get Patient", key: "getPatient", details: "Get a patient by ID, returns the complete patient with records, history, and appointments" },
              { label: "Create Patient", key: "createPatient", details: "Create a new patient"},
              { label: "Update Patient", key: "updatePatient", details: "Update a patient by ID"},
              { label: "Create Document", key: "createDocument", details: "Create a new document"},
              { label: "Create Summary", key: "createSummary", details: "Create a new summary"},
              { label: "Open in OpenOffice", key: "openInOpenoffice", details: "Open a document in OpenOffice"},
              {
                label: "Search Doctor Directory",
                key: "searchDoctorDirectory",
                details: "Doctors addresses directory"
              },
              { label: "Send Notification", key: "sendNotification", details: "Send a notification"},
            ].map(({ label, key, details }) => (
              <div key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={tools[key as keyof Tools]} // Explicitly cast to the keyof Tools
                  onChange={() => handleCheckboxChange(key as keyof Tools)} // Handle checkbox change
                  className="mr-2 w-4 h-4 accent-[#4e7ba0]"
                />
                <div className="flex  gap-5">
                  <label className="w-52 text-[#4e7ba0]">{label}</label>
                  <label className=" text-[#4e7ba0]">{details}</label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div>
          <button
            className="mt-4 px-4 py-2 bg-[#4e7ba0] text-white rounded-lg"
            onClick={() => alert("Settings saved")}
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSettings;
