import React from 'react';

import { IQuestion } from './../Interfaces';
import { Link } from 'react-router-dom';

const Question: React.FC<IQuestion> = ({ text, options, nextPathPar }) => {
   return (
      <div>
         <div>{text}</div>
         {options.map((op, i) => (
            <div>
               <input name="radio" key={i + op} type="radio" /> {op}
            </div>
         ))}
         <Link to={nextPathPar}>Next</Link>
      </div>
   );
};

export default Question;
