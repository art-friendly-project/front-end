import api from 'api';
import { type Dispatch, type SetStateAction } from 'react';

interface cancelModalBtnContainer {
  id: number;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setIsSelectedRanks: Dispatch<SetStateAction<boolean[]>>;
  cancelIdx: number;
}

const CancelModalBtnContainer = ({
  id,
  setIsSelectedRanks,
  setIsModal,
  cancelIdx,
}: cancelModalBtnContainer) => {
  const btnHandler = async () => {
    try {
      await api.delete(`/exhibitions/hopes?exhibitionId=${id}`);

      setIsSelectedRanks((prev) =>
        prev.map((_, i) => {
          if (i === cancelIdx) return false;
          else return false;
        }),
      );

      setIsModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-4">
      <button
        className="w-32 h-12 border-2 border-orange-100 rounded-lg text-Subhead text-gray-110 active:bg-gray-00"
        onClick={() => {
          setIsModal(false);
        }}
      >
        아니요
      </button>
      <button
        className="w-32 h-12 ml-2 text-white bg-orange-100 rounded-lg text-Subhead active:bg-orange-dark-100"
        onClick={() => {
          void btnHandler();
        }}
      >
        네
      </button>
    </div>
  );
};

export default CancelModalBtnContainer;
