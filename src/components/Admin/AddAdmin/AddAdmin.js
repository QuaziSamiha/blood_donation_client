import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../Shared/Navbar/Navbar';

const AddAdmin = () => {

    const [addAdmin, setAddAdmin] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);

        fetch('https://shrouded-sea-66725.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log(res);
                setAddAdmin(res.ok);
            })
    };

    return (
        <>
            <Navbar />

            <section className='pt-24'>
                <div className="flex items-center justify-center">
                    <div className='bg-red-100 my-16 mx-12 px-48 py-24 w-5/6'>
                        <h1 className='text-red-700 font-bold text-2xl mb-8 text-center'>ADD NEW ADMIN</h1>

                        <form className='' onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className='w-full text-gray-500 px-2 py-2 rounded-md shadow focus:outline-none'
                                placeholder='enter new admin email address please...'
                                {...register("emailAddress", { required: true })}
                            />
                            {errors.emailAddress && <span>This field is required</span>}
                            <br />
                            <input
                                className='bg-red-700 w-full text-white rounded-md py-2 mt-12'
                                type="submit"
                                value="Add Admin"
                            />
                        </form>

                        <div>
                            {
                                addAdmin === true ? <p className='pt-4 text-center text-red-700'>Admin Added Successfully</p> : <span></span>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddAdmin;