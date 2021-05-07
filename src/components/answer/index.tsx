import { MouseEvent, useEffect, useRef } from 'react'
import { MENU_ITEM } from '../../config'

type AnswerList = { key: string | number; text: string }
type AnswerProps = { answerList: AnswerList[]; currentAnswer: string | number; onSelect?: (key: string | null) => void }
export default function Answer({ answerList, currentAnswer, onSelect = () => {} }: AnswerProps) {
    const radioRef = useRef<HTMLDivElement>(null)

    const onRadioClick = (event: MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
        if (location.pathname === MENU_ITEM.QUIZ_RESULT) return

        const { currentTarget } = event
        if (radioRef.current?.childNodes) {
            for (const node of radioRef.current.childNodes) {
                const labelNode = node.childNodes[0] as HTMLLabelElement
                if (labelNode) {
                    labelNode.classList.remove('r_on')
                    break
                }
            }
        }
        currentTarget.parentElement?.classList.add('r_on')
        onSelect(currentTarget.getAttribute('data-key'))
    }

    useEffect(() => {
        radioRef.current?.childNodes.forEach((node) => {
            const labelNode = node.childNodes[0] as HTMLLabelElement
            labelNode && labelNode.getAttribute('data-key') === currentAnswer
                ? labelNode.classList.add('r_on')
                : labelNode.classList.remove('r_on')
        })
    }, [currentAnswer, answerList])

    return (
        <div ref={radioRef} className='ans'>
            {answerList.map((a) => (
                <div key={a.key} className='ans-slide'>
                    <label className='label_radio' data-key={a.key} htmlFor={`radio-${a.key}`}>
                        <input
                            name='sample-radio'
                            id={`radio-${a.key}`}
                            data-key={a.key}
                            type='radio'
                            onClick={onRadioClick}
                        />
                        {a.text}
                    </label>
                </div>
            ))}
        </div>
    )
}
