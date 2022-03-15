import React from 'react';

const ShowAllDonors = (props) => {
    const { age, name, bloodGroup, city, email, gender, phnNo, nid, imageUrl } = props.donor;
    // console.log(props);
    return (
        <div className=' border-2 rounded-md m-8'>
            <div className='flex flex-col md:flex-row'>
                <div className='w-3/5 px-4 py-2'>
                    <h1>Name: {name}</h1>
                    <h1>Email: {email}</h1>
                    <h1>City: {city}</h1>
                    <h1>BloodGroup: {bloodGroup}</h1>
                    <h1>Phone: {phnNo}</h1>
                    <p>NID: {nid}</p>
                    <p>Age: {age}</p>
                    <p>Gender: {gender}</p>
                </div>
                <div className='m-2 w-2/5 flex flex-col justify-center items-center'>
                    <img className='w-24 h-24' src={imageUrl} alt="" />
                </div>
            </div>

        </div>
    );
};

export default ShowAllDonors;