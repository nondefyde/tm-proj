import { render } from '@testing-library/react'
import { PersonalityTest } from './index';
import * as hooks from '../../app/hooks';
import * as QuestionSetObject from './question-set';
import * as ResultObject from './result';
import { Result } from './result';

jest.mock('./result')
jest.mock('./question-set')
jest.mock('../../app/hooks', () => ({
	useAppSelector: jest.fn(),
	useAppDispatch: () => jest.fn()
}));

describe('Result Component', () => {
	const useAppSelectorMock = jest.spyOn(hooks, 'useAppSelector')
	
	const QuestionSetMock = jest.spyOn(QuestionSetObject, 'QuestionSet')
	const ResultMock = jest.spyOn(ResultObject, 'Result')
	
	afterEach(() => {
		useAppSelectorMock.mockClear();
	});
	
	beforeEach(() => {
		QuestionSetMock.mockImplementation(() => <>***QuestionSet***</>)
		ResultMock.mockImplementation(() => <>***Result***</>)
		useAppSelectorMock.mockImplementation((selectorFn: any) => selectorFn({
			personalityTest: {
				isFinished: true,
			}
		}));
	});
	
	it('should test snapshot', () => {
		const container = render(<PersonalityTest/>)
		expect(container).toMatchSnapshot();
	});
	
	it('should take snapshot when showAnswer is true', () => {
		useAppSelectorMock.mockImplementation((selectorFn: any) => selectorFn({
			personalityTest: {
				isFinished: false,
			}
		}));
		const { getByText } = render(<PersonalityTest/>)
		const test = getByText('***QuestionSet***');
		expect(test).toBeInTheDocument();
	});
});
