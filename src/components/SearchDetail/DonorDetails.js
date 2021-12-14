import React from 'react';
import { Link } from 'react-router-dom';

const DonorDetails = ({ donorDetail }) => {

    console.log(donorDetail);
    const { name, age, email, phnNo, gender, imageUrl } = donorDetail;

    return (
        <div className=' border-2 rounded-md m-8'>
            <div className='flex flex-col md:flex-row'>
                <div className='w-3/5 px-4 py-2'>
                    <h1>Name: {name}</h1>
                    <h1>Email: {email}</h1>
                    <h1>Phone: {phnNo}</h1>
                    <p>Age: {age}</p>
                    <p>Gender: {gender}</p>
                </div>
                <div className='m-2 w-2/5 flex flex-col justify-center items-center'>
                    <img className='w-24 h-24' src={imageUrl} alt="" />
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className='tracking-wider bg-red-700 text-white font-semibold w-full p-2 my-2 m-2 rounded-md'>
                    <Link to="/getAppointment">Get Appointment</Link>
                </button>
            </div>
        </div>
    );
};

export default DonorDetails;