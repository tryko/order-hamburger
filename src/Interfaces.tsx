type Option = string;

export interface IQuestion {
    question: string;
    options: Option[];
    nextPath: string;
}

export interface IQuestions {
    [key: string]: IQuestion;
}
