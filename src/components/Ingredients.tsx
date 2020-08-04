import React from 'react';
import { Link } from 'react-router-dom';
import { IOrder } from './../Interfaces';
import { ingredientsDisplay } from './../store/initialState';
interface IProps {
   order: IOrder;
}

const Ingredients: React.FC<IProps> = ({ order }) => {
   return (
      <div className="bg-red-200 absolute w-56 h-128 flex justify-center flex-col">
         {ingredientsDisplay.map((ing, i) => (
            <div key={i + ing} className=" h-5">
               <Link to={`./${ing}`}>{order[ing]}</Link>
            </div>
         ))}
      </div>
   );
};

export default Ingredients;
