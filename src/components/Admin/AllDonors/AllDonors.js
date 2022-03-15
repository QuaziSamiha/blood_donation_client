import React, { useState, useEffect } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ShowAllDonors from '../ShowAllDonors/ShowAllDonors';

const AllDonors = () => {
    const [allDonors, setAllDonors] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-sea-66725.herokuapp.com/allDonors')
            .then(res => res.json())
            .then(data => {
                setAllDonors(data);
            })
    }, [])

    return (
        <>
            <Navbar />
            <div className='border drop-shadow-md'>
                <h1 className='mt-32 text-center text-red-700 text-2xl font-bold'>
                    ALL DONORS
                </h1>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-3 pb-16'>
                    {
                        allDonors.map((donor, index) => <ShowAllDonors key={index} donor={donor} />)
                    }
                </div>

            </div>
        </>
    );
};

export default AllDonors;