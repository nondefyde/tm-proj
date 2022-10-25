import styled from 'styled-components';

export const QuestionItemStyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	font-family: "Times New Roman", Times, serif;
	padding: 10px;
	border: 1px solid black;
	margin-bottom: 5px;
	background-color: #ffffff;
	cursor: pointer;
`;

export const QuestionStyledIdentifier = styled.div`
	margin: 0 20px 0 10px;
	width: 30px;
	font-size: 20px;
	background-color: #cccccc;
	justify-content: center;
  align-self: center;
`;

export const QuestionStyledDescription = styled.div`
	font-size: 18px;
	text-align: center;
`;
