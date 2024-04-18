import { type Dispatch, type SetStateAction } from 'react';

interface rankIcon {
  idx: number;
  icon: string[];
  selectedRank: boolean[];
  setSelectedRank: Dispatch<SetStateAction<boolean[]>>;
}

const RankIcon = ({ idx, icon, selectedRank, setSelectedRank }: rankIcon) => {
  return (
    <button
      onClick={() => {
        setSelectedRank((prev) =>
          prev.map((_, i) => {
            if (i === idx) return true;
            else return false;
          }),
        );
      }}
    >
      <img src={selectedRank[idx] ? icon[1] : icon[0]} />
    </button>
  );
};

export default RankIcon;
