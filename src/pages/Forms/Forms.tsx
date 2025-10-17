import { useStatus } from "../../providers/StatusProvider";

const Forms = () => {
  const handlePrint = () => window.print();
  const {isEnglish} = useStatus();

  return (
    <div className="h-full mx-auto flex flex-col">
      <div className=" lg:p-6 print:p-0 flex-grow overflow-y-auto custom-scrollbar ">
        <div className=" bg-white sm:p-2 p-3 lg:p-8 rounded-lg print:shadow-none print:border text-[14px] text-[#4A4A4A] leading-relaxed">
          {/* Header */}
          <header className="mb-6 text-md lg:text-xl">
            <p className="font-semibold">{isEnglish ? "To be submitted to:" : "À soumettre à :"}</p>
            <p>{isEnglish ? "Vehicle Service Center" : "Centre de service des véhicules"}</p>
            <p>Route de Veyrier 86</p>
            <p>1227 Carouge</p>
          </header>
          <div className="border  border-[#D0D5DD] p-6">
            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="font-semibold text-md lg:text-xl uppercase">
                {isEnglish ? "SWISS CONFEDERATION" : "CONFÉDÉRATION SUISSE"}
              </h2>
              <p className="text-md lg:ext-xl">
                {isEnglish
                  ? "Federal Law of December 19, 1958 on Road Traffic"
                  : "Loi fédérale du 19 décembre 1958 sur la circulation routière"}
              </p>
              <h1 className="font-bold text-xl  lg:text-3xl mt-3">
                {isEnglish ? "MEDICAL CERTIFICATE" : "CERTIFICAT MÉDICAL"}
              </h1>
              <p className="mt-1 text-md lg:text-2xl">
                {isEnglish ? "Concerning the aptitude of" : "Concernant l'aptitude de"}
              </p>
            </div>

            <form className="space-y-6 ">
              {/* Section 1 — Personal info */}
              <section className="space-y-4">
                <div className="flex item-center gap-5 ">
                  <label className="block text-sm font-medium mb-1 w-20 lg:w-40">
                    {isEnglish ? "Holder’s No" : "N° du titulaire"}
                  </label>
                  <input
                    type="text"
                    className="border border-[#D0D5DD] flex-1 rounded"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex item-center gap-5">
                    <label className="block text-sm font-medium mb-1 w-20 lg:w-40">
                      {isEnglish ? "First Name" : "Prénom"}
                    </label>
                    <input
                      type="text"
                      className="border border-[#D0D5DD] flex-1 rounded"
                    />
                  </div>
                  <div className="flex item-center gap-5">
                    <label className="block text-sm font-medium mb-1 w-20 lg:w-40">
                      {isEnglish ? "Last Name" : "Nom"}
                    </label>
                    <input
                      type="text"
                      className="border border-[#D0D5DD] flex-1 rounded"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex item-center gap-5">
                    <label className="block text-sm font-medium mb-1 w-20 lg:w-40">
                      {isEnglish ? "Date of birth" : "Date de naissance"}
                    </label>
                    <input
                      type="date"
                      className="border border-[#D0D5DD] flex-1 rounded"
                    />
                  </div>
                  <div className="flex item-center gap-5">
                    <label className="block text-sm font-medium mb-1 w-20 lg:w-40">
                      {isEnglish ? "C/O" : "C/O"}
                    </label>
                    <input
                      type="text"
                      className="border border-[#D0D5DD] flex-1 rounded"
                    />
                  </div>
                </div>

                <div className="flex item-center gap-5">
                  <label className="block text-sm font-medium mb-1 w-20 lg:w-40">
                    {isEnglish ? "Address" : "Adresse"}
                  </label>
                  <input
                    type="text"
                    className="border border-[#D0D5DD] flex-1 rounded"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex item-center gap-5">
                    <label className="block text-sm font-medium mb-1 w-20 lg:w-40">
                      {isEnglish ? "Locality (City/Town)" : "Localité (Ville/Village)"}
                    </label>
                    <input
                      type="text"
                      className="border border-[#D0D5DD] flex-1 rounded"
                    />
                  </div>
                  <div className="flex item-center gap-5">
                    <label className="block text-sm font-medium mb-1 w-20 lg:w-40">
                      {isEnglish ? "Postal code" : "Code postal"}
                    </label>
                    <input
                      type="text"
                      className="border border-[#D0D5DD] flex-1 rounded"
                    />
                  </div>
                </div>
              </section>

              {/* Section 2 — Medical condition */}
              <section className="pt-4 flex items-start">
                <p className="font-semibold me-3">1</p>
                <div className="flex flex-col gap-2 w-full">
                  <label className="flex items-start gap-2 mb-2">
                    <input type="checkbox" className="mt-1" />
                    <span>
                      {isEnglish
                        ? "The candidate does not suffer from any illness or condition that significantly affects the ability to drive."
                        : "Le candidat ne souffre d'aucune maladie ou affection affectant de manière significative sa capacité à conduire."}
                    </span>
                  </label>
                  <label className="flex items-start gap-2 mb-1">
                    <input type="checkbox" className="mt-1" />
                    <span>
                      {isEnglish
                        ? "The candidate suffers from illnesses or conditions relevant to traffic medicine (specify):"
                        : "Le candidat souffre de maladies ou d'affections pertinentes pour la médecine du trafic (préciser) :"}
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border border-[#D0D5DD] flex-1  rounded"
                  />
                </div>
              </section>

              {/* Section 3 — Minimum requirements */}
              <section>
                <p className="my-5 lg:my-10">
                  {isEnglish
                    ? "2.1 Minimum medical requirements (Annex 1 OAC)."
                    : "2.1 Exigences médicales minimales (Annexe 1 OAC)."}
                </p>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
                  <div className="w-full lg:w-1/2">
                    <p className="my-5 lg:mb-10">
                      <span className="font-bold">{isEnglish ? "For Group 1" : "Pour le groupe 1"}</span> (A, A1, B,
                      B1, F, G, M, D1<sup>35</sup>, 106):
                    </p>
                    <label className="block mb-1">
                      <input type="checkbox" /> {isEnglish ? "Are satisfied" : "Sont satisfaites"}
                    </label>
                    <label className="block mb-1">
                      <input type="checkbox" /> {isEnglish
                        ? "Are satisfied with the following conditions (ch.3.2)"
                        : "Sont satisfaites aux conditions suivantes (ch.3.2)"}
                    </label>
                    <label className="block mb-1">
                      <input type="checkbox" /> {isEnglish ? "Are not satisfied" : "Ne sont pas satisfaites"}
                    </label>
                    <label className="block text-sm mt-2">
                      {isEnglish ? "Brief justification):" : "Brève justification) :"}
                    </label>
                    <textarea className="border border-[#D0D5DD] flex-1 rounded w-full my-3"></textarea>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <p className="my-5">
                      <span className="font-bold">{isEnglish ? "For Group 2" : "Pour le groupe 2"}</span> (D, D1, C,
                      C1, {isEnglish
                        ? "authorization to transport persons professionally, traffic experts, passenger or motorized goods vessels"
                        : "autorisation de transporter des personnes à titre professionnel, experts de la circulation, bateaux à passagers ou à marchandises motorisés"}
                      ):
                    </p>
                    <label className="block mb-1">
                      <input type="checkbox" /> {isEnglish ? "Are satisfied" : "Sont satisfaites"}
                    </label>
                    <label className="block mb-1">
                      <input type="checkbox" /> {isEnglish
                        ? "Are satisfied with the following conditions (ch.3.2)"
                        : "Sont satisfaites aux conditions suivantes (ch.3.2)"}
                    </label>
                    <label className="block mb-1">
                      <input type="checkbox" /> {isEnglish ? "Are not satisfied" : "Ne sont pas satisfaites"}
                    </label>
                    <label className="block text-sm mt-2">
                      {isEnglish ? "Brief justification:" : "Brève justification :"}
                    </label>
                    <textarea className="border border-[#D0D5DD] flex-1 rounded w-full my-3"></textarea>
                  </div>
                </div>
              </section>

              {/* Section 2.2 */}
              <section>
                <label className="flex items-start gap-2 mt-2">
                  2.2<input type="checkbox" className="mt-1" />
                  <span>
                    {isEnglish
                      ? "Equivocal result Final evaluation must be carried out by a physician recognized at level 3 or 4."
                      : "Résultat équivoque L'évaluation finale doit être effectuée par un médecin reconnu de niveau 3 ou 4."}
                  </span>
                </label>
                <label className="flex items-start gap-2 mt-2 ms-7">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    {isEnglish
                      ? "Given that the candidate’s fitness to drive raises serious doubts, they should not drive any vehicle before further clarification."
                      : "Étant donné que l'aptitude à la conduite du candidat soulève de sérieux doutes, il ne doit conduire aucun véhicule avant une clarification plus approfondie."}
                  </span>
                </label>
              </section>

              {/* Section 3 — Vision test */}
              <section>
                <p className="">
                  3.1 <span className="font-semibold ms-2">{isEnglish ? "Vision test" : "Test de la vue"}</span> ({isEnglish ? "complete for each group" : "à compléter pour chaque groupe"})
                </p>
                <p className="ms-7">{isEnglish ? "Wears corrective lenses for:" : "Porte des lentilles correctrices pour :"}</p>
                <div className="flex flex-wrap gap-3 xl:gap-32 mt-2 ms-8">
                  <div className="flex items-center gap-5">
                    <p>{isEnglish ? "Group 1" : "Groupe 1"}</p>
                    <label className="mr-4">
                      <input type="radio" name="g1" /> {isEnglish ? "Yes" : "Oui"}
                    </label>
                    <label>
                      <input type="radio" name="g1" /> {isEnglish ? "No" : "Non"}
                    </label>
                  </div>
                  <div className="flex items-center gap-5">
                    <p>{isEnglish ? "Group 2" : "Groupe 2"}</p>
                    <label className="mr-4">
                      <input type="radio" name="g2" /> {isEnglish ? "Yes" : "Oui"}
                    </label>
                    <label>
                      <input type="radio" name="g2" /> {isEnglish ? "No" : "Non"}
                    </label>
                  </div>
                </div>
                <p className="mt-5">
                  {isEnglish
                    ? "3.2 The candidate is fit if they comply with the following medical conditions:"
                    : "3.2 Le candidat est apte s'il remplit les conditions médicales suivantes :"}
                </p>
                <textarea className="border border-[#D0D5DD] rounded w-full"></textarea>
              </section>

              {/* Section 4 — Next check-up */}
              <section>
                <p className=""></p>
                <label className="flex items-start gap-2 mb-2">
                  4 {isEnglish ? "Next check-up" : "Prochain contrôle"}
                  : <input type="checkbox" className="mt-1" /> {isEnglish
                    ? "Within the normal period, in accordance with OAC."
                    : "Dans le délai normal, conformément à l'OAC."}
                </label>
                <div className="flex flex-wrap items-center gap-2 ms-28">
                  <input type="checkbox" />
                  <span>{isEnglish ? "In" : "Dans"}</span>
                  <input
                    type="number"
                    className="w-16 border border-[#D0D5DD] rounded-md"
                  />
                  <span>months by a physician recognized at level</span>
                  <input
                    type="text"
                    className="w-20 border border-[#D0D5DD] rounded-md"
                  /> 
                  <span>.</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <input type="text" className="border border-[#D0D5DD]" />
                    <label className="block text-xs mt-1">
                      {isEnglish ? "Place and date of examination :" : "Lieu et date de l'examen :"}
                    </label>
                  </div>
                  <div>
                    <input type="text" className="border border-[#D0D5DD]" />
                    <label className="block text-xs mt-1">
                      {isEnglish ? "Global Location Number (GLN) :" : "Numéro de localisation mondial (GLN) :"}
                    </label>
                  </div>
                  <div>
                    <input type="text" className="border border-[#D0D5DD]" />
                    <label className="block text-xs mt-1">
                      {isEnglish ? "Stamp and signature of physician :" : "Cachet et signature du médecin :"}
                    </label>
                  </div>
                </div>
              </section>

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-8 print:hidden">
                <button
                  type="reset"
                  className="bg-[#FF3620] text-white px-8 py-2 rounded-md"
                >
                  {isEnglish ? "Reset" : "Réinitialiser"}
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="bg-[#3CA0F2] text-white px-8 py-2 rounded-md"
                >
                  {isEnglish ? "Print" : "Imprimer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
/* Add this to your global index.css */
