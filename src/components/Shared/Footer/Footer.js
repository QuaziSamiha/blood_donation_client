import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Footer = () => {

    const date = new Date();
    let year = date.getFullYear();

    return (
        <footer className='mt-20'>
            <section className='py-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t-2 border-b-2 shadow-lg'>
                <div className='flex items-center justify-center m-4 border-2 rounded shadow-xl'>
                    <div className='py-4'>
                        <h1 className='text-xl text-red-700 font-bold'>Let's Connect</h1>
                    </div>
                </div>
                <div className='flex items-center justify-center m-4 border-2 rounded shadow-xl'>
                    <div className='py-4'>
                        <h1 className='text-xl text-red-700 font-bold'>Help time</h1>
                        <h6 className='text-gray-700 font-semibold text-lg'>sat-wed</h6>
                        <p className='text-gray-500 text-sm'>9am - 8pm</p>
                        <h6 className='text-gray-700 font-semibold text-lg'>thu-fri</h6>
                        <p className='text-gray-500 text-sm'>11am - 6pm</p>
                    </div>
                </div>
                <div className='flex items-center justify-center m-4 border-2 rounded shadow-xl'>
                    <div className='py-4'>
                        <h1 className='text-xl text-red-700 font-bold'>Address</h1>
                    </div>
                </div>
                <div className='flex items-center justify-center m-4 border-2 rounded shadow-xl'>
                    <div className='py-4'>
                        <h1 className='text-xl text-red-700 font-bold'>Leave Your comment</h1>
                    </div>
                </div>
            </section>

            <div className='text-sm  mt-12 py-2 border-t-2 bg-red-700 text-white font-semibold flex items-center justify-center'>
                <FontAwesomeIcon className='mr-2' icon={faCopyright}></FontAwesomeIcon>
                <h5 className=''>
                    Copyright {year}, All Rights Reserved
                </h5>
            </div>
        </footer>
    );
};

export default Footer;