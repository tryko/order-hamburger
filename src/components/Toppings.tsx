import React from 'react';

interface Iprops {
    breadTypes: Array<string>;
    addToBurger: (e: string) => void;
}

const Toppings = ({ breadTypes, addToBurger }: Iprops) => {
    return (
        <div className="w-64 h-64 text-center">
            <div>Choose Toppings</div>
            <ul>
                {breadTypes.map(base => {
                    return (
                        <li key={base} value={base} onClick={() => addToBurger(base)}>
                            <span>{base}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Toppings;
