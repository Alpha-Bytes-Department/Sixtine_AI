import { Outlet, useMatch } from "react-router";
import SideNav from "../../components/shared/SideNav/SideNav";

const Dashboard = () => {

  const isLogIn = useMatch("/dashboard/login");
  const forgotPassword = useMatch("/dashboard/forgot-password");
  const OtpVerification = useMatch("/dashboard/otp-verification");
  const setNewPassword = useMatch("/dashboard/set-new-password");
  const passwordResetSuccessful = useMatch("/dashboard/password-update/successful");
  return (
    <div className="flex w-full h-screen bg-white">
      {isLogIn || forgotPassword || OtpVerification || setNewPassword || passwordResetSuccessful ? <></> : <SideNav />}
      <Outlet />
    </div>
  );

};

export default Dashboard;
