import character4 from 'assets/images/art-friendly/character4.svg';
import { type Dispatch, type SetStateAction } from 'react';
import CancelModalText from './CancelModalText';
import CancelModalBtnContainer from './CancelModalBtnContainer';

interface cancelModal {
  id: number;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setIsSelectedRanks: Dispatch<SetStateAction<boolean[]>>;
  cancelIdx: number;
  setShowDetail: Dispatch<SetStateAction<showDetail>>;
}

const CancelModal = ({
  id,
  setIsModal,
  setIsSelectedRanks,
  cancelIdx,
  setShowDetail,
}: cancelModal) => {
  return (
    <>
      <div className="absolute z-40 flex flex-col items-center justify-center bg-white border h-60 w-80 -top-24 rounded-2xl border-gray-60">
        <img
          src={character4}
          className="absolute w-18 h-18 -top-9 left-[7.7rem]"
        />
        <CancelModalText />
        <CancelModalBtnContainer
          id={id}
          setIsModal={setIsModal}
          setIsSelectedRanks={setIsSelectedRanks}
          cancelIdx={cancelIdx}
          setShowDetail={setShowDetail}
        />
      </div>
    </>
  );
};

export default CancelModal;
