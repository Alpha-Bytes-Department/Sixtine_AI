import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            Welcome to dashboard
            <Outlet/>
        </div>
    );
};

export default Dashboard;