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
  },
  {
    id: '2',
    type: QuestionEnumType.MULTIPLE,
    title: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
    items: [
      {
        id: '1',
        identifier: 'A',
        description: 'Look at your watch every two minutes'
      },
      {
        id: '2',
        identifier: 'B',
        description: 'Bubble with inner anger, but keep quiet'
      },
      {
        id: '3',
        identifier: 'C',
        description: 'Explain to other equally impatient people in the room that the doctor is always running late'
      },
      {
        id: '4',
        identifier: 'D',
        description: 'Complain in a loud voice, while tapping your foot impatiently'
      }
    ]
  },
  {
    id: '3',
    type: QuestionEnumType.MULTIPLE,
    title: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:\n',
    items: [
      {
        id: '1',
        identifier: 'A',
        description: 'Don’t dare contradict them'
      },
      {
        id: '2',
        identifier: 'B',
        description: 'Think that they are obviously right'
      },
      {
        id: '3',
        identifier: 'C',
        description: 'Defend your own point of view, tooth and nail'
      },
      {
        id: '4',
        identifier: 'D',
        description: 'Continuously interrupt your colleague'
      }
    ]
  }
]