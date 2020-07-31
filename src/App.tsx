import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './views/Home/Home';
import Header from './components/Header/Header';

const App: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <Header />
            {location.pathname}
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </>
    );
};

export default App;
