import { IQuestions } from './../Interfaces';

export const questions: IQuestions = {
   bread: {
      text: 'choose bread',
      options: ['A', 'B', 'C'],
      nextPathPar: 'toppings',
   },
   toppings: {
      text: 'choose one topping',
      options: ['d', 'e', 'f'],
      nextPathPar: '',
   },
};
