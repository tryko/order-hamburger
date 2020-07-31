import React from 'react';
import Home from './views/Home/Home';
import { Route, Switch } from 'react-router-dom';
const App: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </>
    );
};

export default App;
