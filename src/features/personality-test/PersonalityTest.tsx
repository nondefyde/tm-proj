import React  from 'react';
import { QuestionSet } from './question-set';
import { Result } from './result';
import { TestContainer } from './PersonalityTest.styled';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';


export const PersonalityTest = () => {
	const { isFinished } = useAppSelector(({ personalityTest }: RootState) => personalityTest);
	return (
		<TestContainer>
			{!isFinished ? <QuestionSet/> : <Result/>}
		</TestContainer>
	)
}