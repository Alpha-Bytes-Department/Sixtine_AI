// import { details } from "motion/react-client";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useStatus } from "../../providers/StatusProvider";

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
  const navigate = useNavigate();
  // Explicitly define the type for the 'tools' state
  // const [model, setModel] = useState("Openai-gpt-5");
  const [audioSource, setAudioSource] = useState("Unknown device");
  const {isEnglish} = useStatus();

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
    <div className="h-full w-full bg-[#00000099] text-[#4A4A4A]">
      <div className="bg-white mx-2 lg:mx-auto p-5 lg:p-6 rounded-lg shadow-lg lg:max-w-5xl  flex flex-col justify-center gap-3 lg:gap-5 mt-5 lg:mt-10">
        <div className="flex justify-between items-center">
          <h2 className="text-xl lg:text-3xl font-bold ">
            {isEnglish ? "Settings" : "Paramètres"}
          </h2>
          <button className="cursor-pointer" onClick={()=>setSetting(false)}>
            <RxCross1 />
          </button>
        </div>
        {/* break line  */}
        {/* <p className="border border-[#D9D9D9] "></p> */}
        {/* Model Dropdown */}
        {/* <div className=" flex  items-center  gap-2">
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
        </div> */}
        {/* break line  */}
        <p className="border border-[#D9D9D9] "></p>
        {/* Audio Source Dropdown */}
        <div className=" flex  items-center gap-2">
          <label className="block text-md lg:text-2xl font-semibold w-64">
            {isEnglish ? "Audio Source" : "Source audio"}
          </label>
          <select
            className="mt-1 block px-2 lg:px-5 py-1 lg:py-2 rounded-md bg-[#4e7ba0] border-0 focus:outline-0 text-white"
            value={audioSource}
            onChange={(e) => setAudioSource(e.target.value)}
          >
            <option value="Unknown device">
              {isEnglish ? "Unknown device" : "Appareil inconnu"}
            </option>
            <option value="Device 1">{isEnglish ? "Device 1" : "Appareil 1"}</option>
            <option value="Device 2">{isEnglish ? "Device 2" : "Appareil 2"}</option>
          </select>
        </div>

        {/* Tools Section */}
        <div className="">
          <h3 className="text-lg font-semibold">{isEnglish ? "Tools" : "Outils"}</h3>
          <div className="space-y-2">
            {[
              {
                label: isEnglish ? "Create Attributes" : "Créer des attributs",
                key: "createAttributes",
                details: isEnglish
                  ? "Create the document attributes"
                  : "Créer les attributs du document",
              },
              {
                label: isEnglish ? "Search Patients" : "Rechercher des patients",
                key: "searchPatients",
                details: isEnglish
                  ? "Search for patients (any fields, allows small typos, does not return the complete patient)"
                  : "Rechercher des patients (tous les champs, autorise les petites fautes de frappe, ne renvoie pas le patient complet)",
              },
              {
                label: isEnglish ? "Get Patient" : "Obtenir un patient",
                key: "getPatient",
                details: isEnglish
                  ? "Get a patient by ID, returns the complete patient with records, history, and appointments"
                  : "Obtenir un patient par ID, renvoie le patient complet avec les dossiers, l'historique et les rendez-vous",
              },
              {
                label: isEnglish ? "Create Patient" : "Créer un patient",
                key: "createPatient",
                details: isEnglish ? "Create a new patient" : "Créer un nouveau patient",
              },
              {
                label: isEnglish ? "Update Patient" : "Mettre à jour le patient",
                key: "updatePatient",
                details: isEnglish ? "Update a patient by ID" : "Mettre à jour un patient par ID",
              },
              {
                label: isEnglish ? "Create Document" : "Créer un document",
                key: "createDocument",
                details: isEnglish ? "Create a new document" : "Créer un nouveau document",
              },
              {
                label: isEnglish ? "Create Summary" : "Créer un résumé",
                key: "createSummary",
                details: isEnglish ? "Create a new summary" : "Créer un nouveau résumé",
              },
              {
                label: isEnglish ? "Open in OpenOffice" : "Ouvrir dans OpenOffice",
                key: "openInOpenoffice",
                details: isEnglish
                  ? "Open a document in OpenOffice"
                  : "Ouvrir un document dans OpenOffice",
              },
              {
                label: isEnglish
                  ? "Search Doctor Directory"
                  : "Rechercher dans l'annuaire des médecins",
                key: "searchDoctorDirectory",
                details: isEnglish
                  ? "Doctors addresses directory"
                  : "Annuaire des adresses des médecins",
              },
              {
                label: isEnglish ? "Send Notification" : "Envoyer une notification",
                key: "sendNotification",
                details: isEnglish ? "Send a notification" : "Envoyer une notification",
              },
            ].map(({ label, key, details }) => (
              <div key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={tools[key as keyof Tools]} // Explicitly cast to the keyof Tools
                  onChange={() => handleCheckboxChange(key as keyof Tools)} // Handle checkbox change
                  className="mr-2 w-4 h-4 accent-[#4e7ba0]"
                />
                <div className="flex gap-3  lg:gap-5">
                  <label className="lg:w-52 text-[#4e7ba0]">{label}</label>
                  <label className=" text-[#4e7ba0] hidden lg:block">{details}</label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <div>
          <button
            className="mt-4 px-2 lg:px-4 py-1 lg:py-2 bg-[#4e7ba0] text-white rounded-lg"
            onClick={() => {
              Swal.fire({
                icon: "question",
                title: isEnglish
                  ? "Do you want to save the settings?"
                  : "Voulez-vous enregistrer les paramètres ?",
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: isEnglish ? "Yes" : "Oui",
                cancelButtonText: isEnglish ? "No" : "Non",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(isEnglish ? "Saved!" : "Enregistré !", "", "success");
                  navigate("/dashboard/chat");
                  setSetting(false);
                }
              });
            }}
          >
            {isEnglish ? "Save Settings" : "Enregistrer les paramètres"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSettings;
