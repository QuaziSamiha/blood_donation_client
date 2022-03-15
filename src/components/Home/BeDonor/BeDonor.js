import React from 'react';
import { Link } from 'react-router-dom';

const BeDonor = () => {
    return (
        <section className='border-b-2 border-t-2 shadow-xl'>
            <div className='m-12'>
                <h1 className="py-4 text-center text-lg text md:text-3xl text-red-700 font-bold">
                    Donate The Blood
                </h1>
                <p className='py-4 px-2 md:px-16 text-xs sm:text-lg text-justify text-gray-700'>
                    At the point when an individual gives blood for someone else who needs blood, emerging because of an ailment,
                    it is called blood gift. A blood donation is completed on account of a prepared clinical expert and in a
                    protected situation, according to the clinical norms. Giving blood is a compassionate motion, and more
                    individuals
                    are getting attracted to it by each spending year. It is a decent sign as it shows that individuals are getting
                    progressively reasonable towards others sufferings.
                </p>
                <div className='flex justify-center mt-8'>
                    <button className='py-4 px-8 md:px-16 text-white text-lg md:text-xl font-bold rounded-full bg-red-700 hover:bg-red-300 hover:text-red-700'>
                        <Link to='/beDonor'>
                            Be a Life Saver
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BeDonor;