import BasicBtn from 'components/common/BasicBtn';
import { useAppDispatch } from 'hooks';
import { type Dispatch, type SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { tasteTestActions } from 'store/modules/tasteTest';

interface btnContainer {
  currentQuestion: number;
  answer: number;
  setAnswer: Dispatch<SetStateAction<number>>;
  setChecked: Dispatch<SetStateAction<boolean[]>>;
}

const BtnContainer = ({
  currentQuestion,
  answer,
  setAnswer,
  setChecked,
}: btnContainer) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const nextBtnHandler = () => {
    dispatch(tasteTestActions.push(answer));
    setAnswer(2);
    setChecked([false, false]);
  };

  const completeBtnHandler = () => {
    dispatch(tasteTestActions.push(answer));
    navigate('/loading');
  };

  return (
    <div className="absolute flex justify-center w-full bottom-[5%]">
      {currentQuestion === LAST_QUESTION_NUM ? (
        <BasicBtn
          name="테스트 완료"
          fn={completeBtnHandler}
          disable={answer === 2}
        />
      ) : (
        <BasicBtn name="다음" fn={nextBtnHandler} disable={answer === 2} />
      )}
    </div>
  );
};
const LAST_QUESTION_NUM = 12;

export default BtnContainer;
