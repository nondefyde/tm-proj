import React, { useEffect } from 'react';
import { QuestionSetStyledContainer, QuestionSetStyledStep, StyledCenterContent } from './QuestionSet.styled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  answerQuestion,
  fetchQuestionAsync,
  selectNextQuestion,
  selectPreviousQuestion
} from './questionSlice';
import { AnswerType, Question } from './question';
import { RootState } from '../../app/store';

export const QuestionSet = () => {
  const dispatch = useAppDispatch();
  
  const { questions, status, answers, current, currentIndex } = useAppSelector(({ questionSet }: RootState) => questionSet);
  
  useEffect(() => {
    dispatch(fetchQuestionAsync())
  }, [])
  
  const onNext = (answer?: AnswerType) => {
    if(answer) {
      console.log('output answer ', answer.questionId)
      dispatch(selectNextQuestion(answer.questionId))
    }
  }
  
  const onPrevious = () => {
    dispatch(selectPreviousQuestion())
  }
  
  const onAnsweredQuestion = (answer: AnswerType) => {
    dispatch(answerQuestion(answer))
  }
  
  
  return (
    <QuestionSetStyledContainer>
      {
        !questions.length || status === 'loading' ?
          <StyledCenterContent>
            Loading...
          </StyledCenterContent> :
          <div>
            {questions.length && current ?
              <div>
                <QuestionSetStyledStep>
                  {questions.length ? `Question ${currentIndex + 1}/${questions.length}` : ''}
                </QuestionSetStyledStep>
                <Question
                  currentIndex={currentIndex}
                  key={current.id}
                  answer={answers[current.id]}
                  onPrevious={onPrevious}
                  onNext={onNext}
                  answerQuestion={onAnsweredQuestion}
                  question={current}/>
              </div>
              : <StyledCenterContent>
                No Question
              </StyledCenterContent>
            }
          </div>
      }
    </QuestionSetStyledContainer>
  );
}
