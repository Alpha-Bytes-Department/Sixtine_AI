import { useForm } from "react-hook-form";

const Forms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const dataSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex-1 w-full overflow-y-auto  text-[#4a4a4a]">
      <div className=" mx-auto p-10 pt-8 bg-white min-h-full">
        <div className="text-center mb-8">
          <h1 className="text-xl font-normal mb-1">SWISS CONFEDERATION</h1>
          <p className="text-sm mb-4">
            Federal Law of December 19, 1958 on Road Traffic
          </p>
          <h2 className="text-2xl font-bold mb-2">MEDICAL CERTIFICATE</h2>
          <p className="text-lg font-semibold">Concerning the aptitude of</p>
        </div>
        <form className=" py-10 px-16 grid grid-cols-2 gap-x-10" onSubmit={handleSubmit(dataSubmit)}>
          {/* =============================== holder's no =============================== */}
          <div className="col-span-2 flex gap-6 mb-6">
            <h2 className="w-36 flex-shrink-0">Holder's No</h2>
            <input
              className="focus:outline-none border-gray-300 border px-3 py-1 rounded-2xl w-full"
              {...register("holdersNo")}
            />
          </div>
          {/* =============================== Name information =============================== */}
          <div className="flex gap-6 mb-6">
            <h2 className="w-36 flex-shrink-0">First Name</h2>
            <input
              className="focus:outline-none border-gray-300 border px-3 py-1 rounded-2xl flex-1"
              {...register("firstName")}
            />
          </div>
          <div className="flex gap-6 mb-6">
            <h2 className="w-36 flex-shrink-0">Last Name</h2>
            <input
              className="focus:outline-none border-gray-300 border px-3 py-1 rounded-2xl flex-1"
              {...register("lastName")}
            />
          </div>
          {/* =============================== Date of Birth and C/O =============================== */}
          <div className="flex gap-6 mb-6">
            <h2 className="w-36 flex-shrink-0">Date of Birth</h2>
            <input
              className="focus:outline-none border-gray-300 border px-3 py-1 rounded-2xl flex-1"
              {...register("dateOfBirth")}
            />
          </div>
          <div className="flex gap-6 mb-6">
            <h2 className="w-36 flex-shrink-0">C/O</h2>
            <input
              className="focus:outline-none border-gray-300 border px-3 py-1 rounded-2xl flex-1"
              {...register("careOf")}
            />
          </div>
          {/* =============================== Address =============================== */}
          <div className="col-span-2 flex gap-6 mb-6">
            <h2 className="w-36 flex-shrink-0">Address</h2>
            <input
              className="focus:outline-none border-gray-300 border px-3 py-1 rounded-2xl flex-1"
              {...register("address")}
            />
          </div>
          {/* =============================== Postcode and City =============================== */}
          <div className="flex gap-6 mb-6">
            <h2 className="w-36 flex-shrink-0 whitespace-nowrap">Locality (City/Town)</h2>
            <input
              className="focus:outline-none border-gray-300 border px-3 py-1 rounded-2xl flex-1"
              {...register("city")}
            />
          </div>
          <div className="flex gap-6 mb-6">
            <h2 className="w-36 flex-shrink-0">Postcode</h2>
            <input
              className="focus:outline-none border-gray-300 border px-3 py-1 rounded-2xl flex-1"
              {...register("postcode")}
            />
          </div>
          {/* ===============================  */}
        </form>
      </div>
    </div>
  );
};

export default Forms;
