export * from './Question'

export const enum QuestionEnumType {
	MULTIPLE = 'multipleSelection',
	SINGLE = 'singleSelection'
}

export type QuestionTypeItem = {
	id: string,
	identifier: string,
	description: string,
}

export type QuestionType = {
	id: string,
	title: string,
	type: QuestionEnumType,
	items: QuestionTypeItem[]
}

export type AnswerType = {
	questionId: string,
	item: QuestionTypeItem
}

export type ResultType = {
	type: string,
	title: string
	description: string
}
