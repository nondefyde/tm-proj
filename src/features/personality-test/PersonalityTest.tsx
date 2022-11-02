import React  from 'react';
import { QuestionSet } from './question-set';
import { Result } from './result';
import { MainContainer } from './PersonalityTest.styled';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';


export const PersonalityTest = () => {
	const { isFinished } = useAppSelector(({ personalityTest }: RootState) => personalityTest);
	return (
		<MainContainer>
			{!isFinished ? <QuestionSet/> : <Result/>}
		</MainContainer>
	)
}