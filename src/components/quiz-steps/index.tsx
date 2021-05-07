import React from 'react'

type Question = { text: string; answer?: string }
type Props = { activeStep?: boolean; currentQuestion?: number; quizList: Question[] }
export default function QuizSteps({ quizList, currentQuestion }: Props) {
    return (
        <div className='qustion-list'>
            {quizList.map((quiz, index) => (
                <div key={index} className={getClassName(quiz, index, currentQuestion)}>
                    <div className='qustion-number'>{quiz.text}</div>
                </div>
            ))}
        </div>
    )
}

const getClassName = (question: Question, index: number, currentQuestion?: number) => {
    if (currentQuestion === index + 1) return 'qustion-slide active'
    if (question.answer) return 'qustion-slide fill'
    return 'qustion-slide'
}
