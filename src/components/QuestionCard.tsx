import React from 'react';
import { AnswerObject } from '../App';
import { Wrapper } from '../App.styles';
import { ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question: string;
    answer: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answer, callback, userAnswer, questionNr, totalQuestions }) => (
    <Wrapper>
        <p className="number">
            Question : {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }}></p>

        <div>

            {
                answer?.map((answerV) => (
                    <ButtonWrapper key={answerV} correct={userAnswer?.correctAnswer === answerV}
                        userClicked={userAnswer?.answer === answerV}>
                        <button disabled={!!userAnswer} value={answerV} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answerV }}></span>
                        </button>
                    </ButtonWrapper>
                ))
            }
        </div>
    </Wrapper>
);

export default QuestionCard;