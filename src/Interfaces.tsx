type Option = string;

export type Ingredient = 'bread' | 'meat' | 'toppings';

export interface IQuestion {
   id: string;
   text: string;
   options: Option[];
   nextPathPar: string;
}

// export interface IQuestions {
//    [key: string]: IQuestion;
// }

export interface IIngredient {
   type: string;
   value: string;
}

export type TOrder = Record<Ingredient, string>;
export interface IOrder {
   [key: string]: string;
}
