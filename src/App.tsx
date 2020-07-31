import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import MakeHamburger from './components/MakeHamburger/MakeHamburger';
import Toppings from './components/Toppings/Toppings';
const App: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <Header />
            {location.pathname}
            <Switch>
                <Route path="/base" component={MakeHamburger} />
                <Route path="/toppings" component={Toppings} />
            </Switch>
        </>
    );
};

export default App;
