const Forms = () => {
  return (
    <div className="flex-1 w-full overflow-y-auto">
      <div className="max-w-4xl mx-auto p-6 pt-8 bg-white min-h-full">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold mb-2">SWISS CONFEDERATION</h1>
          <p className="text-sm mb-4">
            Federal Law of December 19, 1958 on Road Traffic
          </p>
          <h2 className="text-2xl font-bold mb-2">MEDICAL CERTIFICATE</h2>
          <p className="text-lg">Concerning the aptitude of</p>
        </div>

        <form className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Holder's No
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div></div>
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Date of birth
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">C/O</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Locality (City/Town)
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Postal code
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          {/* Section 1 */}
          <div className="border-t pt-4">
            <h3 className="font-bold mb-3">1</h3>
            <div className="space-y-2">
              <label className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm">
                  The candidate does not suffer from any illness or condition
                  that significantly affects the ability to drive.
                </span>
              </label>
              <label className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm">
                  The candidate suffers from illnesses or conditions relevant to
                  traffic medicine (specify):
                </span>
              </label>
            </div>
          </div>

          {/* Section 2.1 */}
          <div className="border-t pt-4">
            <h3 className="font-bold mb-3">
              2.1 Minimum medical requirements (Annex 1 OAC).
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">
                  For Group 1 (A, A1, B, B1, F, G, M, D&lt;35kg, 10B):
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span className="text-sm">Are satisfied</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span className="text-sm">
                      Are satisfied with the following conditions (ch.3.2)
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span className="text-sm">Are not satisfied</span>
                  </label>
                  <div className="mt-2">
                    <label className="block text-sm font-medium mb-1">
                      Brief justification:
                    </label>
                    <textarea className="w-full border border-gray-300 rounded px-3 py-2 h-20"></textarea>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">
                  For Group 2 (D, D1, C, C1, authorization to transport persons
                  professionally, traffic experts, passenger or motorized goods
                  vessels):
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span className="text-sm">Are satisfied</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span className="text-sm">
                      Are satisfied with the following conditions (ch.3.2)
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" />
                    <span className="text-sm">Are not satisfied</span>
                  </label>
                  <div className="mt-2">
                    <label className="block text-sm font-medium mb-1">
                      Brief justification:
                    </label>
                    <textarea className="w-full border border-gray-300 rounded px-3 py-2 h-20"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2.2 */}
          <div className="border-t pt-4">
            <h3 className="font-bold mb-3">2.2</h3>
            <div className="space-y-2">
              <label className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm">
                  Equivocal result: Final evaluation must be carried out by a
                  physician recognized at level 3 or 4.
                </span>
              </label>
              <label className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm">
                  Given that the candidate's fitness to drive raises serious
                  doubts, they should not drive any vehicle before further
                  clarification.
                </span>
              </label>
            </div>
          </div>

          {/* Section 3.1 Vision Test */}
          <div className="border-t pt-4">
            <h3 className="font-bold mb-3">
              3.1 Vision test (complete for each group)
            </h3>
            <p className="text-sm mb-3">Wears corrective lenses for:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Group 1</h4>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" />
                    <span className="text-sm">YES</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" />
                    <span className="text-sm">NO</span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Group 2</h4>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" />
                    <span className="text-sm">YES</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="checkbox" />
                    <span className="text-sm">NO</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3.2 */}
          <div className="border-t pt-4">
            <h3 className="font-bold mb-3">
              3.2 The candidate is fit if they comply with the following medical
              conditions:
            </h3>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 h-32"></textarea>
          </div>

          {/* Section 4 */}
          <div className="border-t pt-4">
            <h3 className="font-bold mb-3">4 Next check-up:</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-sm">
                  within the normal period, in accordance with OAC.
                </span>
              </label>
              <div className="flex items-center space-x-2">
                <input type="checkbox" />
                <span className="text-sm">in</span>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 w-16"
                />
                <span className="text-sm">
                  months by a physician recognized at level
                </span>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-2 py-1 w-16"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Place and date of examination:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Global Location Number (GLN):
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Stamp and signature of physician:
              </label>
              <div className="w-full border border-gray-300 rounded px-3 py-2 h-16"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forms;
