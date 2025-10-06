import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <Outlet/>
        </div>
    );
};

export default Dashboard;