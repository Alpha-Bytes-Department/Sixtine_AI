const Forms = () => {
  const handlePrint = () => window.print();

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 print:p-0 flex-grow overflow-y-auto">
        <div className="mx-auto bg-white p-8 rounded-lg print:shadow-none print:border text-[14px] leading-relaxed">
          {/* Header */}
          <header className="mb-6 text-xl">
            <p className="font-semibold">To be submitted to:</p>
            <p>Vehicle Service Center</p>
            <p>Route de Veyrier 86</p>
            <p>1227 Carouge</p>
          </header>

          <div className="border border-[#D0D5DD] p-6">
            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="font-semibold text-xl uppercase">
                SWISS CONFEDERATION
              </h2>
              <p className="text-xl">
                Federal Law of December 19, 1958 on Road Traffic
              </p>
              <h1 className="font-bold text-3xl mt-3">
                MEDICAL CERTIFICATE
              </h1>
              <p className="mt-1 text-2xl">Concerning the aptitude of</p>
            </div>

            <form className="space-y-6 ">
              {/* Section 1 — Personal info */}
              <section className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex item-center gap-5 ">
                    <label className="block text-sm font-medium mb-1">
                      Holder’s No
                    </label>
                    <input
                      type="text"
                      className="border border-[#D0D5DD] flex-1 rounded"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex item-center gap-5">
                    <label className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="border border-[#D0D5DD] flex-1 rounded"
                    />
                  </div>
                  <div className="flex item-center gap-5">
                    <label className="block text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="border border-[#D0D5DD] flex-1 rounded"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex item-center gap-5">
                    <label className="block text-sm font-medium mb-1">
                      Date of birth
                    </label>
                    <input
                      type="date"
                      className="border border-[#D0D5DD] flex-1 rounded"
                    />
                  </div>
                  <div className="flex item-center gap-5">
                    <label className="block text-sm font-medium mb-1">
                      C/O
                    </label>
                    <input
                      type="text"
                      className="border border-[#D0D5DD] flex-1 rounded"
                    />
                  </div>
                </div>

                <div className="flex item-center gap-5">
                  <label className="block text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    className="border border-[#D0D5DD] flex-1 rounded"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex item-center gap-5">
                    <label className="block text-sm font-medium mb-1">
                      Locality (City/Town)
                    </label>
                    <input
                      type="text"
                      className="border border-[#D0D5DD] flex-1 rounded"
                    />
                  </div>
                  <div className="flex item-center gap-5">
                    <label className="block text-sm font-medium mb-1">
                      Postal code
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
                      The candidate does not suffer from any illness or
                      condition that significantly affects the ability to drive.
                    </span>
                  </label>
                  <label className="flex items-start gap-2 mb-1">
                    <input type="checkbox" className="mt-1" />
                    <span>
                      The candidate suffers from illnesses or conditions
                      relevant to traffic medicine (specify):
                    </span>
                  </label>
                  <input
                    type="text"
                    className="border border-[#D0D5DD] flex-1 rounded"
                  />
                </div>
              </section>

              {/* Section 3 — Minimum requirements */}
              <section>
                <p className="font-semibold">
                  2.1 Minimum medical requirements (Annex 1 OAC).
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-3">
                  <div>
                    <p className="font-semibold mb-1">
                      For Group 1 (A, A1, B, B1, F, G, M,
                      D1&lt;sup&gt;35&lt;/sup&gt;, 106):
                    </p>
                    <label className="block mb-1">
                      <input type="checkbox" /> Are satisfied
                    </label>
                    <label className="block mb-1">
                      <input type="checkbox" /> Are satisfied with the following
                      conditions (ch.3.2)
                    </label>
                    <label className="block mb-1">
                      <input type="checkbox" /> Are not satisfied
                    </label>
                    <label className="block text-sm mt-2">
                      Brief justification:
                    </label>
                    <textarea className="border border-[#D0D5DD] flex-1 rounded"></textarea>
                  </div>

                  <div>
                    <p className=" mb-1">
                      For Group 2 (D, D1, C, C1, authorization to transport
                      persons professionally, traffic experts, passenger or
                      motorized goods vessels):
                    </p>
                    <label className="block mb-1">
                      <input type="checkbox" /> Are satisfied
                    </label>
                    <label className="block mb-1">
                      <input type="checkbox" /> Are satisfied with the following
                      conditions (ch.3.2)
                    </label>
                    <label className="block mb-1">
                      <input type="checkbox" /> Are not satisfied
                    </label>
                    <label className="block text-sm mt-2">
                      Brief justification:
                    </label>
                    <textarea className="border border-[#D0D5DD] flex-1 rounded"></textarea>
                  </div>
                </div>
              </section>

              {/* Section 2.2 */}
              <section>
                <p className="">2.2 Equivocal result:</p>
                <p className="ml-4">
                  Final evaluation must be carried out by a physician recognized
                  at level 3 or 4.
                </p>
                <label className="flex items-start gap-2 mt-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    Given that the candidate’s fitness to drive raises serious
                    doubts, they should not drive any vehicle before further
                    clarification.
                  </span>
                </label>
              </section>

              {/* Section 3 — Vision test */}
              <section>
                <p className="">
                  3.1 Vision test (complete for each group)
                </p>
                <p>Wears corrective lenses for:</p>
                <div className="flex flex-wrap gap-12 mt-2">
                  <div>
                    <p>Group 1</p>
                    <label className="mr-4">
                      <input type="radio" name="g1" /> Yes
                    </label>
                    <label>
                      <input type="radio" name="g1" /> No
                    </label>
                  </div>
                  <div>
                    <p>Group 2</p>
                    <label className="mr-4">
                      <input type="radio" name="g2" /> Yes
                    </label>
                    <label>
                      <input type="radio" name="g2" /> No
                    </label>
                  </div>
                </div>
                <p className=" mt-3">3.2</p>
                <p>
                  The candidate is fit if they comply with the following medical
                  conditions:
                </p>
                <textarea className="border border-[#D0D5DD] flex-1 rounded"></textarea>
              </section>

              {/* Section 4 — Next check-up */}
              <section>
                <p className="">4 Next check-up:</p>
                <label className="flex items-start gap-2 mb-2">
                  <input type="checkbox" className="mt-1" /> Within the normal
                  period, in accordance with OAC.
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  <input type="checkbox" />
                  <span>In</span>
                  <input type="number" className="w-16 border border-[#D0D5DD] rounded-md p-1" />
                  <span>months by a physician recognized at level</span>
                  <input type="text" className="w-20 border border-[#D0D5DD] rounded-md p-1" />
                  <span>.</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <input type="text" className="border border-[#D0D5DD]" />
                    <label className="block text-xs mt-1">
                      Place and date of examination :
                    </label>
                  </div>
                  <div>
                    <input type="text" className="border border-[#D0D5DD]" />
                    <label className="block text-xs mt-1">
                      Global Location Number (GLN) :
                    </label>
                  </div>
                  <div>
                    <input type="text" className="border border-[#D0D5DD]" />
                    <label className="block text-xs mt-1">
                      Stamp and signature of physician :
                    </label>
                  </div>
                </div>
              </section>

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-8 print:hidden">
                <button
                  type="reset"
                  className="bg-[#FF3620] text-white px-4 py-2 rounded-md"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="bg-[#3CA0F2] text-white px-4 py-2 rounded-md"
                >
                  Print
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
