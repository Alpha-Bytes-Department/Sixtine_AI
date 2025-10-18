import { Link } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";


const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-black">Oops...</h1>
        <h1 className="text-4xl  text-black">page not found</h1>
        <p className="mt-4 text-lg text-[#4B4B4B]">
          This Page doesn't exist or was removed ! <br />
          We suggest you back to the dashboard.
        </p>
        <div>
          <Link
            to="/dashboard"
            className="text-white bg-[#4E7BA0] flex items-center gap-3 mt-6 py-2 px-5 rounded-md"
          >
            <IoMdArrowRoundBack /> <span>Back to Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
