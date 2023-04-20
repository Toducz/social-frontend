import { QuestionDto } from './question.dto';

export type ActionDto = {
  id: string;
  startUser: string;
  endUser: string;
  startDate: string;
  endDate: string;
  question: QuestionDto;
};
