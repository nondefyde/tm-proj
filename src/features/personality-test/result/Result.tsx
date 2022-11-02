import React, { useState } from 'react';
import {
  QuestionResultStyledContainer,
  ResultQuestionContainer,
  ResultStyledContent,
  ResultStyledHeader
} from './Result.styled';
import { QuestionStyledButton, QuestionStyledTitle, StyledButtons } from '../question-set/question/Question.styled';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { resetTest, selectResult } from '../PersonalityTestSlice';
import { RootState } from '../../../app/store';
import { QuestionTypeItem } from '../question-set/question';
import { QuestionItem } from '../question-set/question-item';

export const Result = () => {
  const dispatch = useAppDispatch();
  
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  
  const result = useAppSelector(selectResult);
  
  const { questions, answers } = useAppSelector(({ personalityTest }: RootState) => personalityTest);
  
  const onShowAnswers = () => {
    setShowAnswer(!showAnswer)
  }
  
  const onRetakeTest = () => {
    dispatch(resetTest());
  }
  
  return (
    <QuestionResultStyledContainer>
      {result &&
        <div>
          <h4>Your Result</h4>
          <ResultStyledHeader>{result.title}</ResultStyledHeader>
          <ResultStyledContent>
            {result.description}
          </ResultStyledContent>
          <StyledButtons>
            <QuestionStyledButton
              data-testid={'retake'}
              $isDefault={true}
              onClick={onRetakeTest}>
              Retake Question
            </QuestionStyledButton>
            <QuestionStyledButton
              data-testid={'show-answer'}
              onClick={onShowAnswers}>
              {`${showAnswer ? 'Show': 'Hide'} my Answers`}
            </QuestionStyledButton>
          </StyledButtons>
        </div>
      }
      <ResultQuestionContainer>
        {showAnswer && questions.length && questions.map((question) => {
          return <div key={question.id}>
            <QuestionStyledTitle>
              {question.title}
            </QuestionStyledTitle>
            {question.items.map((item: QuestionTypeItem) => {
              return <QuestionItem
                selectedAnswer={answers[question.id]}
                questionId={question.id}
                onItemClicked={() => {}}
                key={item.id} item={item} />
            })}
          </div>
        })}
      </ResultQuestionContainer>
    </QuestionResultStyledContainer>
  );
}
