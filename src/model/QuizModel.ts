import {QuestionOption} from "./QuestionOption";
import {QuizeStage} from "./QuizeStage";
export class QuizModel {
  questionOptions: Array<QuestionOption>;
  id: number;
  order: number;
  label: string;
  body: string;
  answer: QuestionOption;
  type: string;
  score: number;
  flashCardFlipped: boolean;
  quizeStage: QuizeStage;


  constructor() {
  this.questionOptions = [];
  }
}
