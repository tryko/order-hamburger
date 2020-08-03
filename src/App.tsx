import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import FlexWrapper from './components/FlexWrapper';
import MakeHamburger from './components/MakeHamburger/MakeHamburger';
import HamburgerDispatcher from './components/HamburgerDispatcher';
import Ingredients from './components/Ingredients';
import './assets/main.css';

const App: React.FC = () => {
   const [isMakeHamburger, setIsMakeHamburger] = useState(false);
   const { pathname } = useLocation();

   useEffect(() => {
      setIsMakeHamburger(pathname !== '/');
   }, [pathname]);

   return (
      <div className=" h-full">
         <Header />
         {isMakeHamburger && <Ingredients />}
         <FlexWrapper>
            <Switch>
               <Route exact path="/" component={MakeHamburger} />
               <Route
                  exact
                  path="/hamburger/:questionID"
                  component={HamburgerDispatcher}
               />
            </Switch>
         </FlexWrapper>
      </div>
   );
};

export default App;
