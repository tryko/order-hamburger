import React from 'react';
import { useParams } from 'react-router-dom';
import Question from './../Question';
import { questions } from './../../store/initialState';

export default function HamburgerDispatcher() {
   const { questionID } = useParams();
   const question = questions[questionID];

   return (
      <div>
         {question && <Question {...question} />}
         {!question && <div>question not found</div>}
      </div>
   );
}
