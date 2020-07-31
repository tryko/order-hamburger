import React from 'react';
import './../../assets/main.css';

interface Iprops {
    children: React.ReactNode;
}

const FlexWRapper: React.FC<Iprops> = ({ children }) => {
    return <div className="flex justify-center w-full h-full">{children}</div>;
};

export default FlexWRapper;
