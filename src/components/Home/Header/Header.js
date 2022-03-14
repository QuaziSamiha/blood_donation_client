import React from 'react'
import Navbar from '../../Shared/Navbar/Navbar'
import HeaderSlider from '../HeaderSlider/HeaderSlider'

export default function Header() {
    return (
        < div className=''>
            <Navbar />
            <div className='hidden lg:flex'>
                <HeaderSlider />
            </div>
        </div>
    )
}
