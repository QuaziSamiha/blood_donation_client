import { faEdit, faListUl, faPlus, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    console.log(loggedInUser.userEmail);
    useEffect(() => {
        fetch('https://shrouded-sea-66725.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.userEmail })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsAdmin(data);
            })
    }, [])

    return (
        <div className='h-96 text-red-100 pt-16 sm:w-3/6 md:w-2/6 bg-red-700 flex justify-center'>
            {
                isAdmin === true ?
                    <div>
                        <Link to='/'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-red-100 hover:text-red-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faEdit} />
                                <li className='list-none'>
                                    Edit Profile
                                </li>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-red-100 hover:text-red-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faUserEdit} />
                                <li className='list-none'>
                                    Disable Profile
                                </li>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-red-100 hover:text-red-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faTrash} />
                                <li className='list-none'>
                                    Delete Profile
                                </li>
                            </div>
                        </Link>
                    </div>
                    :
                    <div>
                        <Link to='/addAdmin'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-red-100 hover:text-red-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faPlus} />
                                <li className='list-none'>
                                    Add Admin
                                </li>
                            </div>
                        </Link>
                        <Link to='/allDonors'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-red-100 hover:text-red-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faListUl} />
                                <li className='list-none'>
                                    All Donors
                                </li>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='flex py-2 px-16 m-2 rounded hover:bg-red-100 hover:text-red-700'>
                                <FontAwesomeIcon className='pt-1 pr-1' icon={faListUl} />
                                <li className='list-none'>
                                    All Users
                                </li>
                            </div>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default Sidebar;