import { fireEvent, render } from '@testing-library/react'
import { Question, QuestionProps } from './Question';
import { QuestionEnumType } from './index';
import * as QuestionItemObject from '../question-item';
import * as react from 'react';

jest.mock('../question-item')
describe('Question Component', () => {
  
  afterEach(() => {
    useStateMock.mockClear();
  });
  
  const useStateMock = jest.spyOn(react, 'useState')
  let props: QuestionProps;
  
  let onItemClicked: any;
  
  const setSelected = jest.fn();
  const selected = { questionId: '1', item: {} };
  
  beforeEach(() => {
    useStateMock.mockImplementation(() => [selected, setSelected]);
    props = {
      currentIndex: -1,
      onNext: jest.fn(),
      onPrevious: jest.fn(),
      answerQuestion: jest.fn(),
      question: {
        id: '1',
        type: QuestionEnumType.MULTIPLE,
        title: 'Title',
        items: [
          {
            id: '1',
            identifier: 'A',
            description: 'Don’t dare to interrupt them'
          }
        ]
      }
    };
    const QuestionItemMock = jest.spyOn(QuestionItemObject, 'QuestionItem')
    QuestionItemMock.mockImplementation((props) => {
      onItemClicked = props?.onItemClicked;
      return <>***Question***</>
    })
  })
  
  it('should test snapshot', () => {
    const container = render(<Question {...props}/>)
    expect(container).toMatchSnapshot();
  });
  
  it('should show previous button', () => {
    const updated = { ...props, currentIndex: 1 }
    const { getByText } = render(<Question {...updated}/>)
    const previousButtonText = getByText('Previous Question');
    expect(previousButtonText).toBeInTheDocument();
  });
  
  it('when previous button is clicked', () => {
    const updated = { ...props, currentIndex: 1 }
    const { getByTestId } = render(<Question {...updated}/>)
    const previousButton = getByTestId('previous-button');
    fireEvent.click(previousButton);
    expect(props.onPrevious).toHaveBeenCalled();
  });
  
  it('should show click previous button', () => {
    const updated: any = { ...props, answer: selected }
    const { getByTestId } = render(<Question {...updated}/>)
    const nextButton = getByTestId('next-button');
    fireEvent.click(nextButton);
    expect(props.onNext).toHaveBeenCalled();
  });
  
  it('should set selected', () => {
    const updated: any = { ...props, answer: selected }
    render(<Question {...updated}/>)
    onItemClicked({ questionId: '1', item: {} });
    expect(setSelected).toHaveBeenCalledWith(selected);
    expect(props.answerQuestion).toHaveBeenCalledWith(selected);
  });
});
