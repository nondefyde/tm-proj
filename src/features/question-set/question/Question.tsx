import React  from 'react';
import { QuestionType, QuestionTypeItem } from './index';
import { QuestionStyledButton, QuestionStyledContainer, QuestionStyledTitle } from './Question.styled';
import { QuestionItem } from '../question-item';

export type QuestionProps = {
  question: QuestionType,
}

export function Question(props: QuestionProps) {
  const {question} = props;
  
  const onNextButtonClicked = () => {}
  
  const onItemClicked = (item: QuestionTypeItem) => {
    console.log('OUTPUT item ::: ', item);
  }
  
  return (
    <QuestionStyledContainer>
      <QuestionStyledTitle>
        {question.title}
      </QuestionStyledTitle>
      {question.items.map((item: QuestionTypeItem) => {
        return <QuestionItem
          onItemClicked={onItemClicked}
          key={item.id} item={item} />
      })}
      <QuestionStyledButton onClick={onNextButtonClicked}>
        Next Question
      </QuestionStyledButton>
    </QuestionStyledContainer>
  );
}
