import { selectEndpoint } from 'store/modules/endpoint';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { type Dispatch, type SetStateAction } from 'react';
import { tasteTestActions } from 'store/modules/tasteTest';

interface closeConfirmModal {
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const CloseConfirmModal = ({ setIsModal }: closeConfirmModal) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const endpoint = useAppSelector(selectEndpoint);
  const dispatch = useAppDispatch();

  const clearTest = () => {
    if (
      pathname === '/home/taste-test/questions' ||
      pathname === '/home/taste-test/result'
    ) {
      dispatch(tasteTestActions.clear());
    }
  };

  const modalText = () => {
    if (
      pathname === '/home/taste-test/questions' ||
      pathname === '/home/taste-test/result'
    ) {
      return '취향 분석 테스트를 종료할까요?';
    }

    if (pathname.includes('review-post')) {
      return '아직 담벼락을 작성 중이에요.\n종료할까요?';
    }
  };

  return (
    <>
      <div className="absolute top-0 z-10 w-full h-screen bg-black opacity-50" />
      <div className="absolute z-20 flex flex-col items-center justify-center h-48 bg-white w-80 top-80 rounded-xl">
        <span className="mt-8 text-center whitespace-pre-wrap text-Headline-M">
          {modalText()}
        </span>
        <div className="flex mt-4">
          <button
            className="w-32 h-10 mr-2 border-2 border-orange-100 rounded-xl"
            onClick={() => {
              setIsModal(false);
            }}
          >
            취소
          </button>
          <button
            className="w-32 h-10 text-white bg-orange-100 rounded-xl"
            onClick={() => {
              navigate(endpoint);
              clearTest();
            }}
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default CloseConfirmModal;
