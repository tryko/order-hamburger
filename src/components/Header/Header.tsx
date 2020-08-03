import React from 'react';
import './Header.css';
import { ReactComponent as BurgerSVG } from './../../assets/hamburger.svg';
const Header: React.FC = () => {
   return (
      <div className="header flex pl-5">
         <BurgerSVG width="50" height="50" />
         <div className=" ml-10">Make your Hamburger</div>
      </div>
   );
};

export default Header;
