import React from 'react';

import { IQuestion } from './../Interfaces';
import { Link } from 'react-router-dom';

interface IProps {
   question: IQuestion;
   handleOnClick: (type: string, value: string) => void;
   type: string;
}

const Question: React.FC<IProps> = ({ question, handleOnClick, type }) => {
   const { text, options, nextPathPar } = question;
   return (
      <div>
         <div>{text}</div>
         {options.map((op, i) => (
            <div>
               <input
                  name="radio"
                  key={i + op}
                  type="radio"
                  onClick={() => handleOnClick(type, op)}
               />{' '}
               {op}
            </div>
         ))}
         <Link to={nextPathPar}>Next</Link>
      </div>
   );
};

export default Question;
