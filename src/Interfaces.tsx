type Option = string;

// type ingredient = 'bread' | 'meat' | 'toppings'

export interface IQuestion {
   text: string;
   options: Option[];
   nextPathPar: string;
}

export interface IQuestions {
   [key: string]: IQuestion;
}

export interface IIngredient {
   type: string;
   value: string;
}

export interface IOrder {
   [key: string]: string;
}
