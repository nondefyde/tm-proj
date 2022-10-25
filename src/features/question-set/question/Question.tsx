import React  from 'react';
import { QuestionType, QuestionTypeItem } from './index';
import { QuestionStyledButton, QuestionStyledContainer, QuestionStyledTitle } from './Question.styled';
import { QuestionItem } from '../question-item';

type QuestionProps = {
  question: QuestionType
}

export function Question(props: QuestionProps) {
  const {question} = props;
  
  const onNextButtonClicked = () => {}
  
  return (
    <QuestionStyledContainer>
      <QuestionStyledTitle>
        {question.title}
      </QuestionStyledTitle>
      {question.items.map((item: QuestionTypeItem) => {
        return <QuestionItem key={item.id} item={item} />
      })}
      <QuestionStyledButton onClick={onNextButtonClicked}>
        Next Question
      </QuestionStyledButton>
    </QuestionStyledContainer>
  );
}
