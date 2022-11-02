import { cleanup, render } from '@testing-library/react'
import App from './App';
import * as react from 'react';

import * as PersonalityTestObject from './features/personality-test';
import * as QuestionSetObject from './features/personality-test/question-set';

jest.mock('./features/personality-test')

describe('App Component', () => {
  const useStateMock = jest.spyOn(react, 'useState')
  
  const PersonalityTestMock = jest.spyOn(PersonalityTestObject, 'PersonalityTest')
  
  afterEach(cleanup);
  
  const setShowTest = jest.fn();
  const showTest = false;
  
  beforeEach(() => {
    PersonalityTestMock.mockImplementation(() => <>***PersonalityTest***</>)
    useStateMock.mockImplementation(() => [showTest, setShowTest]);
  });
  
  it('should test snapshot', () => {
    const container = render(<App/>)
    expect(container).toMatchSnapshot();
  });
  
  it('should render test component', () => {
    useStateMock.mockImplementation(() => [true, setShowTest]);
    const { getByText } = render(<App/>)
    expect(getByText('***PersonalityTest***')).toBeInTheDocument();
  });
});
