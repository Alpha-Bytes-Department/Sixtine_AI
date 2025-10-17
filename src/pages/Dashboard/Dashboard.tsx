import { Outlet, useMatch } from "react-router";
import SideNav from "../../components/shared/SideNav/SideNav";
import Footer from "../../components/shared/Footer/Footer";

const Dashboard = () => {
  const isLogIn = useMatch("/dashboard/login");
  const forgotPassword = useMatch("/dashboard/forgot-password");
  const OtpVerification = useMatch("/dashboard/otp-verification");
  const setNewPassword = useMatch("/dashboard/set-new-password");
  const passwordResetSuccessful = useMatch(
    "/dashboard/password-update/successful"
  );
  return (
    <div>
      {" "}
      <div className="flex lg:flex-row flex-col w-full h-screen bg-white">
        {isLogIn ||
        forgotPassword ||
        OtpVerification ||
        setNewPassword ||
        passwordResetSuccessful ? (
          <></>
        ) : (
          <SideNav />
        )}
        <div className="overflow-y-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
