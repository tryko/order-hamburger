import React from 'react';

interface Iprops {
    name: string
}

const Home: React.FC<Iprops> = (props) => {
return <div className="Home">{props.}</div>;
};

export default Home;
