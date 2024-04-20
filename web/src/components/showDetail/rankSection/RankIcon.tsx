import { type Dispatch, type SetStateAction } from 'react';

interface rankIcon {
  idx: number;
  icon: string[];
  isSelectedRank: boolean;
  setIsSelectedRanks: Dispatch<SetStateAction<boolean[]>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setCancelIdx: Dispatch<SetStateAction<number>>;
}

const RankIcon = ({
  idx,
  icon,
  isSelectedRank,
  setIsSelectedRanks,
  setIsModal,
  setCancelIdx,
}: rankIcon) => {
  const btnHandler = () => {
    if (isSelectedRank) {
      setCancelIdx(idx);
      setIsModal(true);
    }

    if (!isSelectedRank) {
      setIsSelectedRanks((prev) =>
        prev.map((_, i) => {
          if (i === idx) return true;
          else return false;
        }),
      );
    }
  };

  return (
    <button onClick={btnHandler}>
      <img src={isSelectedRank ? icon[1] : icon[0]} />
    </button>
  );
};

export default RankIcon;
