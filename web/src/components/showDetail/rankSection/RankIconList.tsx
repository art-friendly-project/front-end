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
  id: number;
  checkTemperature: string | null;
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const RankIconList = ({
  id,
  checkTemperature,
  isModal,
  setIsModal,
}: rankIconList) => {
  const [isSelectedRanks, setIsSelectedRanks] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const ranks = [
    '보고 싶어요',
    '좋아해요',
    '관심 있어요',
    '그냥 그래요',
    '안 갈래요',
  ];

  useEffect(() => {
    if (checkTemperature === null) {
      setIsSelectedRanks([false, false, false, false, false]);
    }

    if (checkTemperature !== null) {
      setIsSelectedRanks((prev) =>
        prev.map((_, i) => {
          if (ranks.indexOf(checkTemperature) === i) return true;
          else return false;
        }),
      );
    }
  }, [checkTemperature]);

  return (
    <div className="relative flex justify-around w-full px-4 mt-2 mb-6">
      {icons.map((icon, idx) => (
        <RankIcon
          id={id}
          key={idx}
          idx={idx}
          icon={icon}
          isSelectedRank={isSelectedRanks[idx]}
          setIsModal={setIsModal}
          checkTemperature={checkTemperature}
        />
      ))}
      {isModal ? <CancelModal id={id} setIsModal={setIsModal} /> : null}
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
