import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHandHoldingWater, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
// import { UserContext } from '../../../App'

export default function Navbar() {

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const showSideMenu = () => {
        (isSideMenuOpen) ? setIsSideMenuOpen(false) : setIsSideMenuOpen(true)
    }

    return (
        <nav className='top-0 fixed w-screen h-14 px-4 sm:px-8 bg-red-700 flex flex-row justify-between text-white font-bold'>
            <div>
                <h3 className='tracking-wide flex flex-row p-3 text-lg md:text-xl'>
                    DONATETHEBLOOD
                    <FontAwesomeIcon className='pl-1 text-xl h-8 w-8' icon={faHandHoldingWater} />
                </h3>
            </div>
            <ul className='hidden lg:flex lg:flex-row justify-between tracking-wider lg:py-2'>
                <li className='rounded hover:bg-red-100 hover:text-red-700 p-2 mx-2'>
                    <Link to='/home'>Home</Link>
                </li>
                <li className='rounded hover:bg-red-100 hover:text-red-700 p-2 mx-2'>
                    <Link to='/aboutUs'>About</Link>
                </li>
                <li className='rounded hover:bg-red-100 hover:text-red-700 p-2 mx-2'>
                    <Link to='/donor'>Donor</Link>
                </li>
                <li className='rounded hover:bg-red-100 hover:text-red-700 p-2 mx-2'>
                    <Link to='/signIn'>Sign in</Link>
                </li>
                <li className='rounded hover:bg-red-100 hover:text-red-700 p-2 mx-2'>
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
        <div className='lg:hidden ml-0 fixed h-screen w-3/4 bg-red-600 top-14'>
            <ul className='flex flex-col items-center tracking-wide font-bold'>
                <li className='rounded hover:bg-red-100 hover:text-red-700 px-20 py-2 mb-1 mt-3'>
                    <Link to='/home'>Home</Link>
                </li>
                <li className='rounded hover:bg-red-100 hover:text-red-700 px-20 py-2 my-1'>
                    <Link to='/aboutUs'>About</Link>
                </li>
                <li className='rounded hover:bg-red-100 hover:text-red-700 px-20 py-2 my-1'>
                    <Link to='/signIn'>Sign in</Link>
                </li>
                <li className='rounded hover:bg-red-100 hover:text-red-700 px-20 py-2 my-1'>
                    <Link to='/admin'>Admin</Link>
                </li>
            </ul>
        </div>
    )
}

