import { render } from '@testing-library/react'
import { QuestionSet } from './index';
import * as hooks from '../../../app/hooks';
import { allQuestions } from '../data';
import * as QuestionObject from './question';
import { answerQuestion, selectNextQuestion, selectPreviousQuestion } from '../PersonalityTestSlice';

const mockDispatch = jest.fn();
jest.mock('../../../app/hooks', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: () => mockDispatch
}));
jest.mock('./question')

describe('Question Component', () => {
  const useAppDispatchMock = jest.spyOn(hooks, 'useAppDispatch');
  const useAppSelectorMock = jest.spyOn(hooks, 'useAppSelector');
  
  const initialData = {
    personalityTest: {
      result: {},
      answers: {},
      currentIndex: 0,
      status: 'idle',
      questions: allQuestions,
      current: {
        '1': true
      }
    },
  }
  
  let onPrevious: any;
  let onNext: any;
  let onAnswerQuestion: any;
  
  let answerMock = { questionId: '1', item: { id: '1', identifier: 'A', description: '' } };
  
  afterEach(() => {
    useAppSelectorMock.mockClear();
    useAppDispatchMock.mockClear();
  });
  
  beforeEach(() => {
    const QuestionMock = jest.spyOn(QuestionObject, 'Question')
    QuestionMock.mockImplementation((props) => {
      onPrevious = props?.onPrevious;
      onNext = props?.onNext;
      onAnswerQuestion = props?.answerQuestion;
      return <>***Question***</>
    })
    
    useAppDispatchMock.mockReturnValue(mockDispatch);
    useAppSelectorMock.mockImplementation((selectorFn: any) => selectorFn(initialData));
  });
  
  it('should test snapshot', () => {
    const container = render(<QuestionSet/>)
    expect(container).toMatchSnapshot();
  });
  
  it('should call selectNextQuestion', () => {
    render(<QuestionSet/>);
    onNext(answerMock);
    expect(mockDispatch).toHaveBeenCalledWith(selectNextQuestion('1'));
  });
  
  it('should call selectPreviousQuestion', () => {
    render(<QuestionSet/>);
    onPrevious();
    expect(mockDispatch).toHaveBeenCalledWith(selectPreviousQuestion());
  });
  
  it('should call answerQuestion', () => {
    render(<QuestionSet/>);
    onAnswerQuestion(answerMock);
    expect(mockDispatch).toHaveBeenCalledWith(answerQuestion(answerMock));
  });
  
  it('should show loading text', () => {
    useAppSelectorMock.mockImplementation((selectorFn: any) => selectorFn({
      personalityTest: {
        ...initialData.personalityTest,
        status: 'loading',
        questions: [],
      }
    }));
    const { getByText } = render(<QuestionSet/>)
    const NoQuestionText = getByText('Loading...')
    expect(NoQuestionText).toBeInTheDocument();
  });
  
  it('should show questions', () => {
    useAppSelectorMock.mockImplementation((selectorFn: any) => selectorFn({
      personalityTest: {
        ...initialData.personalityTest,
        current: undefined,
        status: 'idle',
      }
    }));
    const { getByText } = render(<QuestionSet/>)
    const NoQuestionText = getByText('No Question')
    expect(NoQuestionText).toBeInTheDocument();
  });
});
