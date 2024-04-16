import { selectCloseNavigate } from 'store/modules/closeNavigate';
import { useAppSelector } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { type Dispatch, type SetStateAction } from 'react';

interface closeConfirmModal {
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const CloseConfirmModal = ({ setIsModal }: closeConfirmModal) => {
  const navigate = useNavigate();
  const closeNavigate = useAppSelector(selectCloseNavigate);

  return (
    <>
      <div className="absolute top-0 z-10 w-full h-screen bg-black opacity-50" />
      <div className="absolute z-20 flex flex-col items-center justify-center h-48 bg-white w-80 top-80 rounded-xl">
        <span className="mt-6 text-Headline-M">
          취향 분석 테스트를 종료할까요?
        </span>
        <div className="flex mt-12">
          <button
            className="w-32 h-10 mr-2 text-white bg-orange-100 rounded-xl"
            onClick={() => {
              navigate(closeNavigate);
            }}
          >
            확인
          </button>
          <button
            className="w-32 h-10 border-2 border-orange-100 rounded-xl"
            onClick={() => {
              setIsModal(false);
            }}
          >
            취소
          </button>
        </div>
      </div>
    </>
  );
};

export default CloseConfirmModal;
