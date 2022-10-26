import React, { useMemo, useState } from 'react';
import { AnswerType, QuestionTypeItem } from '../question';
import {
  QuestionItemStyledContainer,
  QuestionStyledDescription,
  QuestionStyledIdentifier
} from './QuestionItem.styled';

export type QuestionItemProps = {
  selectedAnswer: AnswerType | undefined
  questionId: string
  item: QuestionTypeItem
  onItemClicked: (answer: AnswerType) => void
}

export function QuestionItem(props: QuestionItemProps) {
  const {questionId, item, selectedAnswer, onItemClicked} = props;
  
  
  const selected = useMemo(() => !!selectedAnswer && selectedAnswer?.item?.id === item.id, [selectedAnswer])
  
  return (
    <QuestionItemStyledContainer
      selected={selected}
      onClick={() => onItemClicked({item, questionId})}>
      <QuestionStyledIdentifier selected={selected}>
        <span>{item.identifier}</span>
      </QuestionStyledIdentifier>
      <QuestionStyledDescription>
        {item.description}
      </QuestionStyledDescription>
    </QuestionItemStyledContainer>
  );
}
