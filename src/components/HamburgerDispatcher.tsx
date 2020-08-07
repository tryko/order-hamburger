import React from 'react';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import Question from './Question';
import { questions } from '../store/initialState';
import { IOrder } from '../Interfaces';
import FlexWrapper from './FlexWrapper';

interface IProps {
   handleDone: (type: string, value: string) => void;
   order: IOrder;
}

const HamburgerDispatcher: React.FC<IProps> = ({ handleDone, order }) => {
   const { questionID } = useParams();
   const question = questions.find(q => q.id === questionID);
   const chosen = order[questionID];

   const handleClick = (clicked: string) => {
      handleDone(questionID, clicked);
   };

   return (
      <FlexWrapper>
         {question && (
            <div className="flex justify-center flex-col w-64">
               <Question
                  title={question.text}
                  options={question.options}
                  handleClick={handleClick}
                  chosen={chosen}
               />
               <Link to={question.nextPathPar}>Next</Link>
            </div>
         )}
         {!question && <div>question not found</div>}
      </FlexWrapper>
   );
};

export default HamburgerDispatcher;
