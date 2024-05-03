import oneInactive from 'assets/images/rank/oneInactive.svg';
import twoInactive from 'assets/images/rank/twoInactive.svg';
import threeInactive from 'assets/images/rank/threeInactive.svg';
import fourInactive from 'assets/images/rank/fourInactive.svg';
import fiveInactive from 'assets/images/rank/fiveInactive.svg';
import oneActive from 'assets/images/rank/oneActive.svg';
import twoActive from 'assets/images/rank/twoActive.svg';
import threeActive from 'assets/images/rank/threeActive.svg';
import fourActive from 'assets/images/rank/fourActive.svg';
import fiveActive from 'assets/images/rank/fiveActive.svg';
import RankIcon from './RankIcon';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import CancelModal from './CancelModal';

interface rankIconList {
  rank: number;
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const RankIconList = ({ rank, isModal, setIsModal }: rankIconList) => {
  const [cancelIdx, setCancelIdx] = useState(0);
  const [isSelectedRanks, setIsSelectedRanks] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    setIsSelectedRanks((prev) =>
      prev.map((_, i) => {
        if (5 - rank === i) return true;
        else return false;
      }),
    );
  }, []);

  return (
    <div className="relative flex justify-around w-full px-4 mt-8 mb-8">
      {icons.map((icon, idx) => (
        <RankIcon
          key={idx}
          idx={idx}
          icon={icon}
          isSelectedRank={isSelectedRanks[idx]}
          setIsSelectedRanks={setIsSelectedRanks}
          setIsModal={setIsModal}
          setCancelIdx={setCancelIdx}
        />
      ))}
      {isModal ? (
        <CancelModal
          setIsModal={setIsModal}
          setIsSelectedRanks={setIsSelectedRanks}
          cancelIdx={cancelIdx}
        />
      ) : null}
    </div>
  );
};

const icons = [
  [fiveInactive, fiveActive],
  [fourInactive, fourActive],
  [threeInactive, threeActive],
  [twoInactive, twoActive],
  [oneInactive, oneActive],
];

export default RankIconList;
