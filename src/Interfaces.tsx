type Option = string;

export interface IQuestion {
   questionTxt: string;
   options: Option[];
   nextPathParam: string;
}

export interface IQuestions {
   [key: string]: IQuestion;
}
