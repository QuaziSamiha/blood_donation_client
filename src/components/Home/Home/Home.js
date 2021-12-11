import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import BeDonor from '../BeDonor/BeDonor'
import Header from '../Header/Header'

export default function Home() {
    return (
        <div>
            <Header />
            <h1 className='pt-24'>this is home</h1>
            <BeDonor />
            <Footer />
        </div>
    )
}
