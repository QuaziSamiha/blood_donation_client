import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {


    return (
        <div className='mt-32 sm:w-2/4 md:w-2/6 bg-red-700'>
            <div className='flex justify-center py-32'>
                <div>
                    <Link to='/addAdmin'>
                        <button className='text-white font-semibold hover:bg-red-100 hover:text-red-700 px-20 py-2 mb-1 mt-3'>
                            Add Admin
                        </button>
                    </Link>
                    <br />
                    <Link to='/showDonors'>
                        <button className='text-white font-semibold hover:bg-red-100 hover:text-red-700 px-20 py-2 mb-1 mt-3'>
                            Show Donors
                        </button>
                    </Link>
                    <br />
                    <Link to='/showUsers'>
                        <button className='text-white font-semibold hover:bg-red-100 hover:text-red-700 px-20 py-2 mb-1 mt-3'>
                            Show Users
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;