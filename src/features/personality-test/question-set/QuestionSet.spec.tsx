import { cleanup, render } from '@testing-library/react'
import { QuestionSet } from './index';

describe('Question Component', () => {
  
  afterEach(cleanup);
  
  it('should test snapshot', () => {
    const container = render(<QuestionSet/>)
    expect(container).toMatchSnapshot();
  });
});
