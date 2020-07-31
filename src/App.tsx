import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import FlexWrapper from './components/FlexWrapper';
import MakeHamburger from './components/MakeHamburger';
import Toppings from './components/Toppings';
const App: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <Header />
            {location.pathname}
            <FlexWrapper>
                <Switch>
                    <Route exact path="/" component={() => <div>home</div>} />
                    <Route exact path="/base" component={MakeHamburger} />
                    <Route exact path="/toppings" component={Toppings} />
                </Switch>
            </FlexWrapper>
        </>
    );
};

export default App;
