import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import BeDonor from '../BeDonor/BeDonor'
import Header from '../Header/Header'
import SearchDonor from '../SearchDonor/SearchDonor'

export default function Home() {
    return (
        <div className=''>
            <Header />
            <SearchDonor />
            <BeDonor />
            <Footer />
        </div>
    )
}
