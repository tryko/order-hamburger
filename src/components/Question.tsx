import React from 'react';

import { IQuestion } from './../Interfaces';
import { Link } from 'react-router-dom';

const Question: React.FC<IQuestion> = ({
   questionTxt,
   options,
   nextPathParam,
}) => {
   return (
      <div>
         <div>{questionTxt}</div>
         <ul>
            {options.map((op, i) => (
               <li key={i + op}> {op}</li>
            ))}
         </ul>
         <Link to={nextPathParam}>Next</Link>
      </div>
   );
};

export default Question;
