import styled from 'styled-components';

export const QuestionStyledContainer = styled.div`
	padding: 10px;
`;

export const QuestionStyledTitle = styled.div`
	font-size: 20px;
	text-align: justify;
	text-weight: 600;
	margin-bottom: 30px;
`;


export const QuestionStyledButton = styled.button<{$isDefault?: boolean}>`
  margin-top: 30px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  color: #ffffff;
  border: 1px solid #cccccc;
  
  ${(props) => props.$isDefault ?
    `background-color: #f6f6f6;
     color: #000000;
    `
    : `background-color: #226bef;
       color: #ffffff;
    `}
  :disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
`;