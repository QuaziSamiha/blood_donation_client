import React, { useContext } from 'react';
import { DonorContext } from '../../App';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import DonorDetails from './DonorDetails';

const SearchDetail = () => {

    const [searchDonorInfo, setSearchDonorInfo] = useContext(DonorContext);
console.log(searchDonorInfo[0].city);
    return (
        <div>
            <Navbar />
            <div className='pt-24 text-center text-red-700 font-bold text-2xl'>
                <h1>All Donor of {searchDonorInfo[0].city} City ({searchDonorInfo[0].bloodGroup} Blood Group)</h1>
            </div>
            <div className='mx-auto grid grid-cols-1 md:grid-cols-3'>
                {
                    searchDonorInfo.map((donor, index) => <DonorDetails key={index} donorDetail={donor} />)
                }
            </div>
            <Footer />
        </div>
    );
};

export default SearchDetail;