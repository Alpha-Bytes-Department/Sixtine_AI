import { Outlet, useMatch } from 'react-router';
import SideNav from '../../components/shared/SideNav/SideNav';

const Dashboard = () => {

    const isLogIn = useMatch("/dashboard/login")
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            {isLogIn?<></>:<SideNav/>}
            <Outlet/>
        </div>
    );
};

export default Dashboard;