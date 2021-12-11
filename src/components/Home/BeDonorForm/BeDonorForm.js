import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";

const BeDonorForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <Navbar />
            <div className='pt-48 flex justify-center items-center'>
                <div className='border-2 rounded-md p-8'>
                    <h1 className='text-center my-8 text-2xl text-red-700 font-semibold'>Enter Your Details</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="text" name="nid" placeholder='NID No.' {...register("nid", { required: true })} /> <br />
                        {errors.nid && <p className='text-center text-sm text-red-400'>enter your nid</p>} <br />

                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="text" name="name" placeholder='Enter Your Name' {...register("name", { required: true })} /> <br />
                        {errors.name && <p className='text-center text-sm text-red-400'>name is required</p>} <br />

                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="text" name="age" placeholder='Your Age' {...register("age", { required: true })} /> <br />
                        {errors.age && <p className='text-center text-sm text-red-400'>your age is required</p>} <br />

                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="text" name="gender" placeholder='Your Gender' {...register("gender", { required: true })} /> <br />
                        {errors.gender && <p className='text-center text-sm text-red-400'>enter your gender please</p>} <br />

                        <select className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            name="bloodGrp"  {...register("bloodGrp")}>
                            <option defaultValue>select blood group</option>
                            <option value="A-">A-</option>
                            <option value="A+">A+</option>
                            <option value="B-">B-</option>
                            <option value="B+">B+</option>
                            <option value="AB-">AB-</option>
                            <option value="AB+">AB+</option>
                            <option value="O-">O-</option>
                            <option value="O+">O+</option>
                        </select> <br />

                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="text" name="city" placeholder='Your City' {...register("city", { required: true })} /> <br />
                        {errors.city && <p className='text-center text-sm text-red-400'>enter your city name please</p>} <br />

                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="text" name="phn" placeholder='Mobile No.' {...register("phn")} /> <br />
                        {errors.phn && <p className='text-center text-sm text-red-400'>enter yours phone no. please</p>} <br />

                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="text" name='email' placeholder='Your Email Address' {...register("email", { required: true })} /> <br />
                        {errors.email && <p className='text-center text-sm text-red-400'>enter your email address please</p>} <br />

                        <label>Attach Your Image</label> <br />
                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="file" name="photo" /> <br />

                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BeDonorForm;