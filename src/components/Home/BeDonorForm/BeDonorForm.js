import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const BeDonorForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [beDonor, setBeDonor] = useState(false);
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const donorData = {
            nid: data.nid,
            name: data.name,
            age: data.age,
            gender: data.gender,
            bloodGroup: data.bloodGrp,
            city: data.city,
            phnNo: data.phn,
            email: data.email,
            imageUrl: imageURL
        }

        // const url = `http://localhost:5001/beDonor`;
        
        const url = `https://shrouded-sea-66725.herokuapp.com/beDonor`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donorData)
        })
            .then(res => {
                console.log('server side response', res);
            })

        setBeDonor(true);
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '87f9925e8490a9799e83f26aba1ccd2e');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Navbar />
            <div className='pt-48 flex justify-center items-center'>
                <div className='border-2 rounded-md p-8'>
                    <h1 className='text-center my-8 text-2xl text-red-700 font-semibold'>Enter Your Details</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="number" name="nid" placeholder='NID No.' {...register("nid", { required: true, minLength: 10, maxLength: 10 })} /> <br />
                        {errors.nid && <p className='text-center text-sm text-red-400'>please enter your nid (10 digits)</p>} <br />

                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="text" name="name" placeholder='Enter Your Name' {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })} /> <br />
                        {errors.name && <p className='text-center text-sm text-red-400'>please enter your name (use only letter)</p>} <br />

                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="number" name="age" placeholder='Your Age' {...register("age", { required: true, min: 18, max: 50 })} /> <br />
                        {errors.age && <p className='text-center text-sm text-red-400'>please enter your age, use only number <br /> minimum age 18 years and maximum age 50 years</p>} <br />

                        <select className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            name="gender"  {...register("gender", { required: true })}>
                            <option defaultValue={''}>Select Your Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select> <br />

                        <select className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            name="bloodGrp"  {...register("bloodGrp", { required: true })}>
                            <option defaultValue={' '}>Select Your Blood Group</option>
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
                            type="text" name="city" placeholder='Your City' {...register("city", { required: true, minLength: 5, pattern: /^[A-Za-z]+$/i })} /> <br />
                        {errors.city && <p className='text-center text-sm text-red-400'>please enter your city name <br />minimum 5 letters required</p>} <br />

                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="text" name="phn" placeholder='Mobile No....01xxxxxxxxx' {...register("phn", { pattern: /^[01]\d+$/i, minLength: 11, maxLength: 11 })} /> <br />
                        {errors.phn && <p className='text-center text-sm text-red-400'>please enter yours phone no.</p>} <br />

                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="email" name='email' placeholder='Your Email Address' {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} /> <br />
                        {errors.email && <p className='text-center text-sm text-red-400'>enter your email address please</p>} <br />

                        <label>Attach Your Image</label> <br />
                        <input className='py-2 px-4  my-2 w-full rounded-md shadow focus:outline-none'
                            type="file" name="photo" onChange={handleImageUpload}/> <br />

                        <input className='py-2 px-4 bg-red-700 text-white hover:bg-red-200 hover:text-red-700 font-bold my-2 w-full rounded-md shadow focus:outline-none'
                            type="submit" />
                    </form>


                    {

                        beDonor === false ?
                            <span></span>
                            :
                            <div className='pt-4 text-green-700 text-center font-semibold'>
                                <h3>CONGRATULATION!!!</h3>
                                <p>Now You Are A Blood Donor</p>
                            </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BeDonorForm;