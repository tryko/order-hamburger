type Option = string;

export interface IQuestion {
   text: string;
   options: Option[];
   nextPathPar: string;
}

export interface IQuestions {
   [key: string]: IQuestion;
}
