import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHandHoldingWater, faTimes } from '@fortawesome/free-solid-svg-icons'
// import logo from '../../../images/blood-icon.png'
import { Link } from "react-router-dom"

export default function Navbar() {

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const showSideMenu = () => {
        (isSideMenuOpen) ? setIsSideMenuOpen(false) : setIsSideMenuOpen(true)
    }

    return (
            <nav className='fixed w-screen h-14 px-8 bg-red-700 flex flex-row justify-between text-white font-bold'>
                <div className=''>
                    <h3 className='flex flex-row p-3 text-lg'>
                        DONATETHEBLOOD
                        <FontAwesomeIcon className='pl-1 text-xl h-8 w-8' icon={faHandHoldingWater} />
                        {/* <img src={logo} className='h-6 w-6' alt="" /> */}
                    </h3>
                </div>
                <ul className='hidden lg:flex lg:flex-row justify-between'>
                    <li className='p-2 mx-2'>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className='p-2 mx-2'>
                        <Link to='/aboutUs'>About</Link>
                    </li>
                    <li className='p-2 mx-2'>
                        <Link to='/donor'>Donor</Link>
                    </li>
                    <li className='p-2 mx-2'>
                        <Link to='/signIn'>Sign in</Link>
                    </li>
                    <li className='p-2 mx-2'>
                        <Link to='/admin'>Admin</Link>
                    </li>
                </ul>

                <button onClick={() => { showSideMenu() }}
                    className='lg:hidden p-3'>
                    {(isSideMenuOpen) ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
                {(isSideMenuOpen) ? SideMenu() : ''}
            </nav>
    )
}

function SideMenu() {
    return (
        <div className='fixed h-screen w-3/4 bg-red-600 top-14'>
            <ul className='flex flex-col font-xs font-bold items-center'>
                <li className='hover:bg-white hover:text-red-700 px-20 py-2 my-1'>
                    <Link to='/home'>Home</Link>
                </li>
                <li className='hover:bg-white hover:text-red-700 px-20 py-2 my-1'>
                    <Link to='/aboutUs'>About</Link>
                </li>
                <li className='hover:bg-white hover:text-red-700 px-20 py-2 my-1'>
                    <Link to='/signIn'>Sign in</Link>
                </li>
                <li className='hover:bg-white hover:text-red-700 px-20 py-2 my-1'>
                    <Link to='/admin'>Admin</Link>
                </li>
            </ul>
        </div>
    )
}

