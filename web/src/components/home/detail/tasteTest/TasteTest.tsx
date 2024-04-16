import { useRef } from 'react';
import TasteTestProgessBar from './TasteTestProgessBar';
import TasteTestTitle from './TasteTestTitle';
import { tasteTestQuestions } from 'assets/data/tasteTestData';
import { useParams } from 'react-router-dom';
import TasteTestAnswers from './TasteTestAnswers';
import BtnBasic from 'components/common/BtnBasic';

const TasteTest = () => {
  const answer = useRef([]);
  const params = useParams();
  const id = params.id;
  const tasteTestQuestion = tasteTestQuestions[Number(id)];
  console.log(answer);

  const btnHandler = () => {};
  return (
    <>
      <TasteTestProgessBar />
      <TasteTestTitle questionNum={id} question={tasteTestQuestion.question} />
      <TasteTestAnswers
        answer1={tasteTestQuestion.answer1}
        answer2={tasteTestQuestion.answer2}
      />
      <div className="flex justify-center mt-16">
        <BtnBasic name="다음" fn={btnHandler} />
      </div>
    </>
  );
};

export default TasteTest;
