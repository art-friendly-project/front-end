import character4 from 'assets/images/art-friendly/character4.svg';
import { type Dispatch, type SetStateAction } from 'react';

interface cancelModal {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setIsSelectedRanks: Dispatch<SetStateAction<boolean[]>>;
  cancelIdx: number;
}

const CancelModal = ({
  setIsModal,
  setIsSelectedRanks,
  cancelIdx,
}: cancelModal) => {
  const okBtnHandler = () => {
    setIsSelectedRanks((prev) =>
      prev.map((_, i) => {
        if (i === cancelIdx) return false;
        else return false;
      }),
    );

    setIsModal(false);
  };

  return (
    <>
      <div className="absolute z-10 flex flex-col items-center justify-center bg-white border h-60 w-80 -top-24 rounded-2xl border-gray-60">
        <img
          src={character4}
          className="absolute w-18 h-18 -top-9 left-[7.7rem]"
        />
        <span className="mt-6 text-center text-Headline-M text-gray-110">
          고래밥님의 표현이 많은 사람들의
          <br />
          전시생활에 도움이 될 수 있어요!
        </span>
        <span className="mt-4 text-Body3-M text-gray-70">
          정말 취소하시겠어요?
        </span>
        <div className="mt-4">
          <button
            className="w-32 h-12 border-2 border-orange-100 rounded-lg text-Subhead text-gray-110"
            onClick={() => {
              setIsModal(false);
            }}
          >
            아니요
          </button>
          <button
            className="w-32 h-12 ml-2 text-white bg-orange-100 rounded-lg text-Subhead"
            onClick={okBtnHandler}
          >
            네
          </button>
        </div>
      </div>
    </>
  );
};

export default CancelModal;
