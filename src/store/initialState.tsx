import { IQuestions } from './../Interfaces';

export const questions: IQuestions = {
   bread: {
      questionTxt: 'choose bread',
      options: ['A', 'B', 'C'],
      nextPathParam: 'toppings',
   },
   toppings: {
      questionTxt: 'choose one topping',
      options: ['d', 'e', 'f'],
      nextPathParam: '',
   },
};
