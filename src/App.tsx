import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import FlexWrapper from './components/FlexWrapper';
import MakeHamburger from './components/MakeHamburger';
import Toppings from './components/Toppings';
import './assets/main.css';

const App: React.FC = () => {
    const [isMakeHamburger, setIsMakeHamburger] = useState(false);
    const handleIsMAkeHamburger = () => {
        setIsMakeHamburger(prevValue => !prevValue);
    };
    return (
        <div className=" h-full">
            <Header />
            {isMakeHamburger && <div className="bg-red-200 absolute w-56 h-128"></div>}
            <FlexWrapper>
                <Switch>
                    <Route exact path="/base">
                        <MakeHamburger clickHandler={handleIsMAkeHamburger} />
                    </Route>
                    <Route exact path="/toppings" component={Toppings} />
                </Switch>
            </FlexWrapper>
        </div>
    );
};

export default App;
