import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <section className='min-h-screen container pt-32 pb-16'>
                <Sidebar />
            </section>
        </>
    );
};

export default Dashboard;