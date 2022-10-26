import { cleanup, render } from '@testing-library/react'
import { Question, QuestionProps } from './Question';
import { QuestionEnumType } from './index';

describe('Question Component', () => {
  
  afterEach(cleanup);
  
  let props: QuestionProps;
  
  beforeEach(() => {
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
  })
  
  it('should test snapshot', () => {
    const container = render(<Question {...props}/>)
    expect(container).toMatchSnapshot();
  });
});
