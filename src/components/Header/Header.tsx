import React from 'react';
import './Header.css';

interface Iprops {
    title?: string;
}

const Header: React.FC<Iprops> = () => {
    return <div className="Header">Make your Hamburger</div>;
};

export default Header;
