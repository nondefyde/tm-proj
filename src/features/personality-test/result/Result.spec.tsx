import { fireEvent, render } from '@testing-library/react'
import { Result } from './index';
import * as react from 'react'
import * as hooks from '../../../app/hooks';
import { useAppSelector } from '../../../app/hooks';
import { resetTest } from '../PersonalityTestSlice';

const mockDispatch = jest.fn();
jest.mock('../../../app/hooks', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: () => mockDispatch
}));

describe('Result Component', () => {
  
  const useStateMock = jest.spyOn(react, 'useState')
  const useAppDispatchMock = jest.spyOn(hooks, 'useAppDispatch')
  const useAppSelectorMock = jest.spyOn(hooks, 'useAppSelector')
  
  const setShowAnswer = jest.fn();
  const showAnswer = false;
  
  afterEach(() => {
    useAppSelectorMock.mockClear();
    useAppDispatchMock.mockClear();
  });
  
  beforeEach(() => {
    useStateMock.mockImplementation(() => [showAnswer, setShowAnswer]);
    useAppDispatchMock.mockReturnValue(mockDispatch);
    useAppSelectorMock.mockImplementation((selectorFn: any) => selectorFn({
      personalityTest: {
        result: {},
        questions: [
          {
            id: '1',
            type: 'multipleSelection',
            title: 'Title',
            items: [
              {
                id: '1',
                identifier: 'A',
                description: 'Description'
              }
            ]
          },
        ],
        answers: {}
      },
    }));
  });
  
  it('should test snapshot', () => {
    const container = render(<Result/>)
    expect(container).toMatchSnapshot();
  });
  
  it('should take snapshot when showAnswer is true', () => {
    useStateMock.mockImplementation(() => [true, setShowAnswer]);
    const { getByText } = render(<Result/>)
    const showText = getByText(/Show my Answers/);
    expect(showText).toBeInTheDocument();
  });
  
  it('should call resetTest when retake button is click ', () => {
    const { getByTestId } = render(<Result/>)
    const retakeButton = getByTestId('retake');
    fireEvent.click(retakeButton);
    expect(mockDispatch).toHaveBeenCalledWith(resetTest());
  });

  it('should setShowAnswer when showAnswer button is clicked', () => {
    const { getByTestId } = render(<Result/>)
    const showAnswerButton = getByTestId('show-answer');
    fireEvent.click(showAnswerButton);
    expect(setShowAnswer).toHaveBeenCalledWith(!showAnswer);
  });
});
