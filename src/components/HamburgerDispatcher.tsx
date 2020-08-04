import React from 'react';
import { useParams } from 'react-router-dom';
import Question from './Question';
import { questions } from '../store/initialState';

interface IProps {
   handleOnClick: (type: string, value: string) => void;
}

const HamburgerDispatcher: React.FC<IProps> = ({ handleOnClick }) => {
   const { questionID } = useParams();
   const q = questions[questionID];

   return (
      <div>
         {q && (
            <Question
               question={q}
               handleOnClick={handleOnClick}
               type={questionID}
            />
         )}
         {!q && <div>question not found</div>}
      </div>
   );
};

export default HamburgerDispatcher;
