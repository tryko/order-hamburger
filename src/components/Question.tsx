import React from 'react';

import { IQuestion } from './../Interfaces';
import { Link } from 'react-router-dom';

const Question: React.FC<IQuestion> = ({ text, options, nextPathPar }) => {
   return (
      <div>
         <div>{text}</div>
         <ul>
            {options.map((op, i) => (
               <li key={i + op}> {op}</li>
            ))}
         </ul>
         <Link to={nextPathPar}>Next</Link>
      </div>
   );
};

export default Question;
