import styled from 'styled-components';

export const MainContainer = styled.div`
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