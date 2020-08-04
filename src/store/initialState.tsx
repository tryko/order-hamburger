import { IQuestion, IIngredient, IOrder } from './../Interfaces';

export const questions: IQuestion[] = [
   {
      id: 'bread',
      text: 'choose bread',
      options: ['A', 'B', 'C'],
      nextPathPar: 'meat',
   },
   {
      id: 'meat',
      text: 'How would you like your meat?',
      options: ['rare', 'medium well', 'well done'],
      nextPathPar: 'toppings',
   },
   {
      id: 'toppings',
      text: 'choose one topping',
      options: ['d', 'e', 'f'],
      nextPathPar: '',
   },
];

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

// export enum ingreDis {
//    toppings,
//    meat,
//    bread,
// }

export const ingredientsDisplay = ['toppings', 'meat', 'bread'];
