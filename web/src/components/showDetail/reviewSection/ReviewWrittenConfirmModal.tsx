import { type Dispatch, type SetStateAction } from 'react';

interface reviewWrittenConfirmModal {
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const ReviewWrittenConfirmModal = ({
  setIsModal,
}: reviewWrittenConfirmModal) => {
  return (
    <>
      <div className="absolute shadow-custom bottom-[50%] z-40 flex flex-col items-center justify-center bg-white rounded-2xl w-80">
        <span className="mt-6 mb-8 text-center whitespace-pre-wrap text-Headline-M text-gray-110">
          담벼락 남기기는 전시 별로
          <br />
          1개만 작성할 수 있어요.
        </span>
        <button
          className="w-32 h-10 mb-4 text-white bg-orange-100 rounded-lg active:bg-orange-dark-100 text-Subhead"
          onClick={() => {
            setIsModal(false);
          }}
        >
          확인
        </button>
      </div>
    </>
  );
};

export default ReviewWrittenConfirmModal;
