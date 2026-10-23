import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({cart}) => {
    const user = localStorage.getItem("user");



    return (
        <div>
            {user ? (
                <div>
                    <Link to="/logout">Logout</Link>
                    <Link to="/home">Home</Link>
                   <button className='float-end rounded-2 bg-primary'>
                      <FontAwesomeIcon icon={faCartShopping} />Cart <sup>{cart.length}</sup></button>
                </div>
            ) : (
                <div>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            )}

        </div>
    )
}

export default Navbar