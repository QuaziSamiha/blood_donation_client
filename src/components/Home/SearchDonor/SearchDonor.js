import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { DonorContext } from '../../../App';

const SearchDonor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isSearched, setIsSearched] = useState(false);
    const [searchDonorInfo, setSearchDonorInfo] = useContext(DonorContext);

    const navigate = useNavigate();

    const onSubmit = data => {
        // console.log(data);
        fetch(`https://shrouded-sea-66725.herokuapp.com/searchDonors?city=${data.city}&bloodGroup=${data.bloodGrp}`)
            .then(res => res.json())
            .then(data => {
                setSearchDonorInfo(data);
                // console.log(searchDonorInfo);
            })
        setIsSearched(true);
    };

    return (
        <section className='mx-8 md:mx-16 my-16 py-12'>
            <div className='px-1 md:px-8 pt-12 pb-24 shadow-2xl'>
                <h1 className='pb-8 text-center my-8 text-lg md:text-2xl text-red-700 font-bold sm:font-bold lg:font-semibold'>
                    Search for Donor
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 lg:grid-cols-3'>
                    <div className='flex justify-center items-center'>
                        <input
                            className='text-xs sm:text-sm py-2 px-1 md:px-4 my-2 w-3/4 rounded-md shadow focus:outline-none border-2'
                            type="text"
                            name="city"
                            placeholder='Your City' {...register("city", { required: true, minLength: 5, pattern: /^[A-Za-z]+$/i })} />
                        {errors.city && <p className='text-center text-xs text-red-400'>please enter your city name or minimum 5 letters required</p>}
                    </div>
                    <div className='text-xs sm:text-sm flex justify-center items-center'>
                        <select className='py-2 px-1 md:px-4 my-2 w-3/4 rounded-md shadow focus:outline-none border-2'
                            name="bloodGrp"  {...register("bloodGrp", { required: true })}>
                            <option defaultValue={' '}>Select Your Blood Group</option>
                            <option value="A-">A-</option>
                            <option value="A%2B">A+</option>
                            <option value="B-">B-</option>
                            <option value="B%2B">B+</option>
                            <option value="AB-">AB-</option>
                            <option value="AB%2B">AB+</option>
                            <option value="O-">O-</option>
                            <option value="O%2B">O+</option>
                        </select> <br />
                    </div>
                    <div className='text-sm flex justify-center items-center'>
                        <input className='py-2 px-4 bg-red-700 text-white hover:bg-red-200 hover:text-red-700 font-bold my-2 w-3/4 rounded-md shadow focus:outline-none'
                            type="submit" value="Search" />
                    </div>
                </form>

                {
                    isSearched === true ?
                        <div className='md:flex flex-row justify-center items center'>
                            <h1 className='text-red-700 text-center font-bold md:text-xl pt-8'>
                                {searchDonorInfo.length} Donors Available
                            </h1>
                            <div className='flex justify-center'>
                                <button onClick={() => { navigate('/searchDetail') }}
                                    className='bg-red-700 text-white hover:bg-red-200 hover:text-red-700 rounded-md font-bold my-8 mx-8 py-1 px-12'>
                                    Details
                                </button>
                            </div>
                        </div>
                        :
                        <span></span>
                }
            </div>
        </section>
    );
};

export default SearchDonor;