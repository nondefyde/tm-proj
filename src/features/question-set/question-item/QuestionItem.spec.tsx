import { cleanup, render } from '@testing-library/react'
import { QuestionItem, QuestionItemProps } from './index';

describe('Question Component', () => {
  
  afterEach(cleanup);
  
  let props: QuestionItemProps;
  
  beforeEach(() => {
    props = {
      selectedAnswer: undefined,
      questionId: '1',
      onItemClicked: jest.fn(),
      item: {
        id: '1',
        identifier: 'A',
        description: 'Don’t dare to interrupt them'
      }
    };
  })
  
  it('should test snapshot', () => {
    const container = render(<QuestionItem {...props}/>)
    expect(container).toMatchSnapshot();
  });
});
