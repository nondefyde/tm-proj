import styled from 'styled-components';

interface Props {
	selected: boolean
}

export const QuestionItemStyledContainer = styled.div<Props>`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #ffffff;
  cursor: pointer;
  gap: 20px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #bbb7b7;

  :hover {
    border: 1px solid #d90f0f;
  }

  ${({ selected }) => selected && 'border: 1px solid #d90f0f'}
`;

export const QuestionStyledIdentifier = styled.div<Props>`
	width: 30px;
	height: 30px;
	min-width: 30px;
	border-radius: 4px;
	font-size: 16px;
	background-color: #cccccc;
	display: flex;
	justify-content: center;
  align-items: center;

  ${({ selected }) => selected && `
      background-color: #d90f0f;
      color: #ffffff
  `}
`;

export const QuestionStyledDescription = styled.div`
	font-size: 14px;
`;
