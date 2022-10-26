import styled from 'styled-components';

export const QuestionSetStyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #f6f6f6;
	width: 45%;
	min-height: 450px;
	padding: 50px;

  @media screen and (max-width: 480px) {
    width: 90%;
	  padding: 15px;
  }
`;

export const QuestionSetStyledStep = styled.div`
	font-size: 14px;
	display: flex;
	padding: 10px;
	font-weight: 500;
`;

export const StyledCenterContent = styled.div`
  display: flex;
	align-self: center;
	justify-content: center;
	align-content: center;
	align-items: center;
  width: inherit;
  min-height: inherit;
`;
