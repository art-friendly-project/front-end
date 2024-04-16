import { useState } from 'react';
import TasteTestProgessBar from './TasteTestProgessBar';
import TasteTestTitle from './TasteTestTitle';
import { tasteTestQuestions } from 'assets/data/tasteTestData';
import TasteTestAnswers from './TasteTestAnswers';
import BtnContainer from './BtnContainer';
import { selectTasteTest } from 'store/modules/tasteTest';
import { useAppSelector } from 'hooks';

const TasteTest = () => {
  const answerResult = useAppSelector(selectTasteTest);
  const [answer, setAnswer] = useState(2);
  const [checked, setChecked] = useState([false, false]);

  const currentQuestion = answerResult.length + 1;
  const Question = tasteTestQuestions[currentQuestion - 1];

  return (
    <>
      <TasteTestProgessBar currentQuestion={currentQuestion} />
      <TasteTestTitle
        currentQuestion={currentQuestion}
        question={Question.question}
      />
      <TasteTestAnswers
        answer1={Question.answer1}
        answer2={Question.answer2}
        checked={checked}
        setChecked={setChecked}
        setAnswer={setAnswer}
      />
      <BtnContainer
        currentQuestion={currentQuestion}
        answer={answer}
        setAnswer={setAnswer}
        setChecked={setChecked}
      />
    </>
  );
};

export default TasteTest;
