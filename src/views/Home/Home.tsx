import React from 'react';
import { useParams } from 'react-router-dom';
import './Home.css';
interface Iprops {
    name: string;
}

const Home: React.FC<Iprops> = ({ name = 'Home' }) => {
    const { par } = useParams();
    return (
        <div className="Home">
            {par}
            <div className="component-question">{name}</div>
        </div>
    );
};

export default Home;
