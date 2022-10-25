import React from 'react';
import { QuestionTypeItem } from '../question';
import {
  QuestionItemStyledContainer,
  QuestionStyledDescription,
  QuestionStyledIdentifier
} from './QuestionItem.styled';

type QuestionItemProps = {
  item: QuestionTypeItem
}

export function QuestionItem(props: QuestionItemProps) {
  const {item} = props;
  
  return (
    <QuestionItemStyledContainer>
      <QuestionStyledIdentifier>
        {item.identifier}
      </QuestionStyledIdentifier>
      <QuestionStyledDescription>
        {item.description}
      </QuestionStyledDescription>
    </QuestionItemStyledContainer>
  );
}
