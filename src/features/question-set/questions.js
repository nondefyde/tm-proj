import {QuestionEnumType} from './question';

export const allQuestions = [
  {
    id: '1',
    type: QuestionEnumType.MULTIPLE,
    title: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
    items: [
      {
        id: '1',
        identifier: 'A',
        description: 'Don’t dare to interrupt them'
      },
      {
        id: '2',
        identifier: 'B',
        description: 'Think it’s more important to give them some of your time; work can wait'
      },
      {
        id: '3',
        identifier: 'C',
        description: 'Listen, but with only with half an ear'
      },
      {
        id: '4',
        identifier: 'D',
        description: 'Interrupt and explain that you are really busy at the moment'
      }
    ]
  }
  ]