import React from 'react';

interface Iprops {
    clickHandler: () => void;
}

const MakeHamburger = ({ clickHandler }: Iprops) => {
    return (
        <div className="w-64 h-64 text-center">
            Make Your Hamburger
            <div>
                <button className="bg-gray-300 w-20 rounded-full" onClick={() => clickHandler()}>
                    Create
                </button>
            </div>
        </div>
    );
};

export default MakeHamburger;
