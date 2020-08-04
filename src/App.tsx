import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import FlexWrapper from './components/FlexWrapper';
import MakeHamburger from './components/MakeHamburger/MakeHamburger';
import HamburgerDispatcher from './components/HamburgerDispatcher';
import Ingredients from './components/Ingredients';
import './assets/main.css';

// import { initialOrder } from './store/initialState';
import { IOrder } from './Interfaces';
const initialOrder: IOrder = {
   bread: '',
   meat: '',
   toppings: '',
};

const App: React.FC = () => {
   const [isMakeHamburger, setIsMakeHamburger] = useState(false);
   const [order, setOrder] = useState(initialOrder);
   const { pathname } = useLocation();

   useEffect(() => {
      setIsMakeHamburger(pathname !== '/');
   }, [pathname]);

   const handleDone = (type: string, value: string) => {
      setOrder((prevOrder: IOrder) => {
         return { ...prevOrder, [type]: value };
      });
   };

   return (
      <div className=" h-full">
         <Header />
         {isMakeHamburger && <Ingredients order={order} />}
         <FlexWrapper>
            <Switch>
               <Route exact path="/" component={MakeHamburger} />
               <Route exact path="/hamburger/:questionID">
                  <HamburgerDispatcher handleDone={handleDone} order={order} />
               </Route>
            </Switch>
         </FlexWrapper>
      </div>
   );
};

export default App;
