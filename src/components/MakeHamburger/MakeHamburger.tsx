import React from 'react';
import { Link } from 'react-router-dom';
import './MakeHamburger.css';

const MakeHamburger = () => {
    return (
        <div className="w-128 h-128 flex justify-center">
            <Link className="link" to="/hamburger/bread">
                Lets Make a Hamburger
            </Link>
        </div>
    );
};

export default MakeHamburger;
