import { IQuestions, IIngredient, IOrder } from './../Interfaces';

export const questions: IQuestions = {
   bread: {
      text: 'choose bread',
      options: ['A', 'B', 'C'],
      nextPathPar: 'toppings',
   },
   meat: {
      text: 'How would you like your meat?',
      options: ['rare', 'medium well', 'well done'],
      nextPathPar: 'toppings',
   },
   toppings: {
      text: 'choose one topping',
      options: ['d', 'e', 'f'],
      nextPathPar: '',
   },
};

export const orderTemplate: IIngredient[] = [
   { type: 'bread', value: 'whole wheat' },
   { type: 'meat', value: 'rare' },
   { type: 'toppings', value: 'omelet' },
];

export const initialOrder: IOrder = {
   bread: '',
   meat: '',
   toppings: '',
};

export const ingredientsDisplay = ['toppings', 'meat', 'bread'];
