import {QuestionEnumType, QuestionType, ResultType} from './question-set/question';


export const allQuestions: QuestionType[] = [
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

export const resultData: ResultType[] = [
  {
    type: 'introvert',
    title: 'Your Result\n' +
        'You are more of an introvert',
    description: 'You feel that living alone is to live happily, and you prefer hiding in a crowd rather than standing' +
        ' out in one. You are perpetually tormented by the idea of doing things wrong, not understanding or not being ' +
        'alert enough or intelligent enough to do what others expect of you. You lack in self-confidence and you seem ' +
        ' So, you try to remain the most transparent and discreet possible. How far will you take this logic of' +
        ' self-denigration? Try and stop projecting onto others the bad image you have about yourself. ' +
        'Have a good look around you and you’ll see that they too have faults, weaknesses and shortcomings,' +
      'Have a good look around you and you’ll see that they too have faults, weaknesses and shortcomings,' +
        ' so stop finding excuses for everything. Maybe you were brought up in an atmosphere of ‘You’ll never make' +
      ' the grade’ as a child — a poison that you need progressively to get out of your system. Learn to look after' +
      ' your own interests — everyone else does, so why not you? You too have desires, dreams and opinions — express' +
      ' them. If you think that by saying no or thinking differently from others that you will no longer be loved,' +
      ' it just isn’t so. Others will learn to respect you because you respect yourself now.'
  },
  {
    type: 'introvert',
    title: 'Your Result\n' +
        'You are more of an Extrovert',
    description: 'You feel that living alone is to live happily, and you prefer hiding in a crowd rather than standing' +
        ' so stop finding excuses for everything. Maybe you were brought up in an atmosphere of ‘You’ll never make the' +
        ' grade’ as a child — a poison that you need progressively to get out of your system. Learn to look after your' +
      ' out in one. You are perpetually tormented by the idea of doing things wrong, not understanding or not being ' +
      'alert enough or intelligent enough to do what others expect of you. You lack in self-confidence and you seem ' +
      'Have a good look around you and you’ll see that they too have faults, weaknesses and shortcomings,' +
        ' own interests — everyone else does, so why not you? You too have desires, dreams and opinions — express them.' +
        ' If you think that by saying no or thinking differently from others that you will no longer be loved, it just' +
        ' isn’t so. Others will learn to respect you because you respect yourself'
  }
]