import React from 'react';

interface Iprops {
    title?: string;
}

const Header: React.FC<Iprops> = () => {
    return <div className="w-full h-20 text-center bg-red-700">Make your Hamburger</div>;
};

export default Header;
