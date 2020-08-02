import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import FlexWrapper from './components/FlexWrapper';
import MakeHamburger from './components/MakeHamburger/MakeHamburger';
// import Toppings from './components/Toppings';
import './assets/main.css';
import HamburgerDispatcher from './components/HamburgerDispatcher/HamburgerDispatcher';
// const breadTypes = ['white', 'whole wheet'];

// interface Iprops {
//     hamburger: Array<string>;
// }

const App: React.FC = () => {
    const [isMakeHamburger, setIsMakeHamburger] = useState(false);
    // const [HamburgerIngre, setHamburgerIngre] = useState<Array<string>>([]);
    const { pathname } = useLocation();

    useEffect(() => {
        console.log('pathname:', pathname);
        setIsMakeHamburger(pathname !== '/');
    }, [pathname]);

    // function addToBurger(value: string) {
    //     setHamburgerIngre(prevIngre => [...prevIngre, value]);
    // }
    // add bread
    // preperation
    // dressing
    return (
        <div className=" h-full">
            <Header />
            {isMakeHamburger && (
                <div className="bg-red-200 absolute w-56 h-128">
                    {/* {HamburgerIngre.map(ingre => ingre + ' ')} */}
                </div>
            )}
            <FlexWrapper>
                <Switch>
                    <Route exact path="/" component={() => <MakeHamburger />} />
                    <Route
                        exact
                        path="/hamburger/:questionID"
                        component={() => <HamburgerDispatcher />}
                    />
                </Switch>
            </FlexWrapper>
        </div>
    );
};

export default App;
