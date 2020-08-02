import React from 'react';
import { useParams } from 'react-router-dom';
// extend routerProps
import { IQuestions } from './../../Interfaces';
import Question from './../Question';
export default function HamburgerDispatcher() {
    const questions: IQuestions = {
        bread: {
            question: 'choose bread',
            options: ['A', 'B', 'C'],
            nextPath: 'toppings',
        },
        toppings: {
            question: 'choose one topping',
            options: ['d', 'e', 'f'],
            nextPath: '',
        },
    };
    const { questionID } = useParams();
    // console.log('slug: ', questionID);
    const { question, options, nextPath } = questions[questionID];
    if (question) {
        return <Question question={question} options={options} nextPath={nextPath} />;
    }
    return <div>question not found</div>;
}
