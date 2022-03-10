import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navbar from '../../Shared/Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

export default function Admin() {

    return (
        <div>
            <Navbar />
            <Sidebar />
            <h1 className='pt-24'>this is admin</h1>
            <Footer />
        </div>
    )
}
