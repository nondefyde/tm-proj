import personalityTestSlice, {
  answerQuestion,
  QuestionSetState,
  resetTest,
  selectNextQuestion,
  selectPreviousQuestion
} from './PersonalityTestSlice';
import { QuestionEnumType, QuestionType } from './question-set/question';

describe('PersonalityTest reducer', () => {
  const initialState: QuestionSetState = {
    questions: [],
    currentIndex: 0,
    current: undefined,
    answers: {},
    status: 'idle',
    isFinished: false,
    result: undefined
  };
  
  it('should handle initial state', () => {
    expect(personalityTestSlice(undefined, { type: 'unknown' })).toEqual(initialState);
  });
  
  it('should handle answerQuestion', () => {
    const actual = personalityTestSlice(initialState, answerQuestion({
      questionId: '1',
      item: {
        id: '1',
        identifier: 'A',
        description: '1',
      }
    }));
    expect(actual.answers).toEqual({
        '1': {
          questionId: '1',
          item: { id: '1', identifier: 'A', description: '1' }
        }
      }
    );
  });
  
  it('should reset test', () => {
    const actual = personalityTestSlice(initialState, resetTest());
    expect(actual).toEqual(initialState);
  });
  
  describe('selectNextQuestion action', () => {
    let questionsData: QuestionType[] = [];
    beforeEach(() => {
      questionsData = [
        {
          id: '1',
          title: 'test 1',
          type: QuestionEnumType.MULTIPLE,
          items: []
        },
        {
          id: '2',
          title: 'test 2',
          type: QuestionEnumType.MULTIPLE,
          items: []
        }
      ]
    })
    it('should select next question', () => {
      const actual = personalityTestSlice({
        ...initialState,
        currentIndex: 0,
        questions: [
          {
            id: '1',
            title: 'test 1',
            type: QuestionEnumType.MULTIPLE,
            items: []
          },
          {
            id: '2',
            title: 'test 2',
            type: QuestionEnumType.MULTIPLE,
            items: []
          }
        ],
      }, selectNextQuestion('1'));
      expect(actual.current).toEqual({ id: '2', title: 'test 2', type: 'multipleSelection', items: [] });
      expect(actual.currentIndex).toEqual(1);
    });
  
    it('should set isFinish as true', () => {
      const actual = personalityTestSlice({
        ...initialState,
        currentIndex: 1,
        questions: questionsData,
      }, selectNextQuestion('2'));
      expect(actual.isFinished).toBeTruthy();
    });
  })
  
  
  describe('selectPreviousQuestion action', () => {
    let questionsData: QuestionType[] = [];
    beforeEach(() => {
      questionsData = [
        {
          id: '1',
          title: 'test 1',
          type: QuestionEnumType.MULTIPLE,
          items: []
        },
        {
          id: '2',
          title: 'test 2',
          type: QuestionEnumType.MULTIPLE,
          items: []
        }
      ]
    })
    it('should select previous question', () => {
      const actual = personalityTestSlice({
        ...initialState,
        currentIndex: 1,
        questions: [
          {
            id: '1',
            title: 'test 1',
            type: QuestionEnumType.MULTIPLE,
            items: []
          },
          {
            id: '2',
            title: 'test 2',
            type: QuestionEnumType.MULTIPLE,
            items: []
          }
        ],
      }, selectPreviousQuestion());
      expect(actual.current).toEqual({ id: '1', title: 'test 1', type: 'multipleSelection', items: [] });
      expect(actual.currentIndex).toEqual(0);
    });
    
    it('should do nothing to current step', () => {
      const actual = personalityTestSlice({
        ...initialState,
        currentIndex: 0,
        questions: questionsData,
      }, selectPreviousQuestion());
      expect(actual.currentIndex).toEqual(0);
    });
  })
});
