import React from 'react';
import { QuestionSetStyledContainer, QuestionSetStyledStep } from './QuestionSet.styled';
import { Question, QuestionType } from './question';
import { allQuestions } from './questions';

export const QuestionSet = () => {
  const questions: QuestionType[] = allQuestions;
  return (
    <QuestionSetStyledContainer>
      <QuestionSetStyledStep>
        Question 1/14
      </QuestionSetStyledStep>
      {questions.map((question: QuestionType) => <Question key={question.id} question={question}/>)}
    </QuestionSetStyledContainer>
  );
}
