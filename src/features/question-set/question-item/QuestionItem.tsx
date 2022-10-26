import React from 'react';
import { QuestionTypeItem } from '../question';
import {
  QuestionItemStyledContainer,
  QuestionStyledDescription,
  QuestionStyledIdentifier
} from './QuestionItem.styled';

export type QuestionItemProps = {
  item: QuestionTypeItem
  onItemClicked: (item: QuestionTypeItem) => void
}

export function QuestionItem(props: QuestionItemProps) {
  const {item, onItemClicked} = props;
  
  return (
    <QuestionItemStyledContainer onClick={() => onItemClicked(item)}>
      <QuestionStyledIdentifier>
        <span>{item.identifier}</span>
      </QuestionStyledIdentifier>
      <QuestionStyledDescription>
        {item.description}
      </QuestionStyledDescription>
    </QuestionItemStyledContainer>
  );
}
