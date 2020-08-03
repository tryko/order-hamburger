import React from 'react';
import { useParams } from 'react-router-dom';
import Question from './Question';
import { questions } from '../store/initialState';

const HamburgerDispatcher: React.FC = () => {
   const { questionID } = useParams();
   const q = questions[questionID];

   return (
      <div>
         {q && (
            <Question
               text={q.text}
               options={q.options}
               nextPathPar={q.nextPathPar}
            />
         )}
         {!q && <div>question not found</div>}
      </div>
   );
};

export default HamburgerDispatcher;
