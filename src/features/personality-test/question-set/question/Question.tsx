import React, { useState } from 'react';
import { AnswerType, QuestionType, QuestionTypeItem } from './index';
import { QuestionStyledButton, QuestionStyledContainer, QuestionStyledTitle, StyledButtons } from './Question.styled';
import { QuestionItem } from '../question-item';

export type QuestionProps = {
  currentIndex: number,
  answer?: AnswerType,
  question: QuestionType,
  onPrevious: (answer?: AnswerType) => void
  onNext: (answer?: AnswerType) => void
  answerQuestion: (answer: AnswerType) => void
}

export function Question(props: QuestionProps) {
  const { question, answer, answerQuestion, onPrevious, onNext, currentIndex } = props;
  
  const [selected, setSelected] = useState<AnswerType | undefined>(answer);
  
  console.log('selected ::: ', selected);
  
  const onSelected = (answer: AnswerType) => {
    setSelected(answer);
    answerQuestion(answer)
  }
  
  return (
    <QuestionStyledContainer>
      <QuestionStyledTitle>
        {question.title}
      </QuestionStyledTitle>
      {question.items.map((item: QuestionTypeItem) => {
        return <QuestionItem
          selectedAnswer={selected}
          questionId={question.id}
          onItemClicked={onSelected}
          key={item.id} item={item} />
      })}
      <StyledButtons>
        {currentIndex > 0 &&
          <QuestionStyledButton
            data-testid={'previous-button'}
            disabled={currentIndex <= 0}
            $isDefault={true}
            onClick={() => onPrevious(selected)}>
            Previous Question
          </QuestionStyledButton>
        }
        <QuestionStyledButton
          data-testid={'next-button'}
          disabled={!selected}
          onClick={() => onNext(selected)}>
          Next Question
        </QuestionStyledButton>
      </StyledButtons>
    </QuestionStyledContainer>
  );
}
