import styled from 'styled-components';

export const QuestionItemStyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #ffffff;
  cursor: pointer;
  gap: 20px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid black;

  :hover {
    border: 1px solid #d90f0f;
  }
`;

export const QuestionStyledIdentifier = styled.div`
	width: 30px;
	height: 30px;
	min-width: 30px;
	border-radius: 4px;
	font-size: 16px;
	background-color: #cccccc;
	display: flex;
	justify-content: center;
  align-items: center;
`;

export const QuestionStyledDescription = styled.div`
	font-size: 16px;
`;
