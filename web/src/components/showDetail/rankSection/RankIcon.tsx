import api from 'api';
import { type Dispatch, type SetStateAction } from 'react';

interface rankIcon {
  id: number;
  idx: number;
  icon: string[];
  isSelectedRank: boolean;
  setIsSelectedRanks: Dispatch<SetStateAction<boolean[]>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setCancelIdx: Dispatch<SetStateAction<number>>;
  checkTemperature: string | null;
}

const RankIcon = ({
  id,
  idx,
  icon,
  isSelectedRank,
  setIsSelectedRanks,
  setIsModal,
  setCancelIdx,
  checkTemperature,
}: rankIcon) => {
  const btnHandler = async () => {
    if (isSelectedRank) {
      setCancelIdx(idx);
      setIsModal(true);
    }

    if (!isSelectedRank) {
      try {
        if (checkTemperature === null) {
          await api.post(
            `/exhibitions/hopes?exhibitionId=${id}&hopeIndex=${idx + 1}`,
          );
        } else {
          await api.patch(
            `/exhibitions/hopes?exhibitionId=${id}&hopeIndex=${idx + 1}`,
          );
        }
        setIsSelectedRanks((prev) =>
          prev.map((_, i) => {
            if (i === idx) return true;
            else return false;
          }),
        );
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <button
      onClick={() => {
        void btnHandler();
      }}
      className="flex items-center justify-center rounded-lg h-28 w-18 active:bg-gray-00"
    >
      <img src={isSelectedRank ? icon[1] : icon[0]} />
    </button>
  );
};

export default RankIcon;
