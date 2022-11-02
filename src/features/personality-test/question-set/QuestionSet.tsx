import React, { useEffect } from 'react';
import { QuestionSetStyledStep, StyledCenterContent } from './QuestionSet.styled';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  answerQuestion,
  fetchQuestionAsync,
  selectNextQuestion,
  selectPreviousQuestion
} from '../PersonalityTestSlice';
import { AnswerType, Question } from './question';
import { RootState } from '../../../app/store';

export const QuestionSet = () => {
  const dispatch = useAppDispatch();
  
  const { questions, status, answers, current, currentIndex } = useAppSelector(({ personalityTest }: RootState) => personalityTest);
  
  useEffect(() => {
    dispatch(fetchQuestionAsync())
  }, [])
  
  const onNext = (answer?: AnswerType) => {
    if(answer) {
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
    <div>
      {
        !questions.length || status === 'loading' ?
          <StyledCenterContent>
            Loading...
          </StyledCenterContent> :
          <div>
            {current ?
	            <div>
		            <QuestionSetStyledStep>
			            {questions.length ? `Question ${currentIndex + 1}/${questions.length}` : ''}
		            </QuestionSetStyledStep>
		            <Question
			            currentIndex={currentIndex}
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
    </div>
  );
}
