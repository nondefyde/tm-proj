import React, { useState } from 'react';
import { QuestionSet } from './question-set';
import { Result } from './result';
import { TestContainer } from './PersonalityTest.styled';
import { useAppDispatch } from '../../app/hooks';


export const PersonalityTest = () => {
	const dispatch = useAppDispatch();
	const [show, setShow] = useState(true);
	
	const onRetake = () => {
		setShow(false);
	}
	
	return (
		<TestContainer>
			{show ? <QuestionSet/> : <Result onRetake={onRetake}/>}
		</TestContainer>
	)
}