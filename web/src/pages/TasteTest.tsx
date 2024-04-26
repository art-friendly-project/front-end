import { useState } from 'react';
import TasteTestProgessBar from '../components/home/detail/tasteTest/questions/TasteTestProgessBar';
import TasteTestTitle from '../components/home/detail/tasteTest/questions/TasteTestTitle';
import { tasteTestQuestions } from 'assets/data/tasteTestData';
import TasteTestAnswers from '../components/home/detail/tasteTest/questions/TasteTestAnswers';
import BtnContainer from '../components/home/detail/tasteTest/questions/BtnContainer';
import { selectTasteTest } from 'store/modules/tasteTest';
import { useAppSelector } from 'hooks';
import ConfirmModal from 'components/common/ConfirmModal';
import { selectEndpoint } from 'store/modules/endpoint';
import { useNavigate } from 'react-router-dom';

const TasteTest = () => {
  const [answer, setAnswer] = useState(2);
  const [checked, setChecked] = useState([false, false]);

  const navigate = useNavigate();

  const answerResult = useAppSelector(selectTasteTest);
  const endpoint = useAppSelector(selectEndpoint);

  const currentQuestion = answerResult.length + 1;
  const Question = tasteTestQuestions[currentQuestion - 1];

  const confirmModalFn = () => {
    navigate(endpoint);
  };

  return (
    <>
      {
        <ConfirmModal
          text="취향 분석 테스트를 종료할까요?"
          fn={confirmModalFn}
        />
      }
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
