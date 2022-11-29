import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <div>
    <div className='navBar'>
        <h1>
            <Link to='/'>
            Home
            </Link>
        </h1>
        <h1>
            <Link to="/Main">
            Main
            </Link>
        </h1>
    </div>
</div>
);
};

export default Navbar;