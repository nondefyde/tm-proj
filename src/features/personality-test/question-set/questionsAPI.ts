// A mock function to mimic making an async request for data
import { allQuestions } from '../questions';
import { QuestionType } from './question';

export function fetchQuestion() {
  return new Promise<{data: QuestionType[]}>((resolve) =>
    setTimeout(() => resolve({ data: allQuestions }), 500)
  );
}
