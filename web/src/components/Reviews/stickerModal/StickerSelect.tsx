import { type Dispatch, type SetStateAction } from 'react';
import angry from 'assets/images/sticker/angry.svg';
import arrow from 'assets/images/sticker/arrow.svg';
import check from 'assets/images/sticker/check.svg';
import circle from 'assets/images/sticker/circle.svg';
import cloud from 'assets/images/sticker/cloud.svg';
import clover from 'assets/images/sticker/clover.svg';
import flower from 'assets/images/sticker/flower.svg';
import fourDot from 'assets/images/sticker/fourDot.svg';
import heart from 'assets/images/sticker/heart.svg';
import normal from 'assets/images/sticker/normal.svg';
import shine from 'assets/images/sticker/shine.svg';
import smile from 'assets/images/sticker/smile.svg';
import spring from 'assets/images/sticker/spring.svg';
import star from 'assets/images/sticker/star.svg';
import sun from 'assets/images/sticker/sun.svg';
import vertical from 'assets/images/sticker/vertical.svg';
import StickerSelectTitle from './StickerSelectTitle';
import StickerSelectBtnContainer from './StickerSelectBtnContainer';
import StickerSelectImg from './StickerSelectImg';
import StickerList from './StickerList';

interface stickerSelect {
  setSticker: Dispatch<SetStateAction<string>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setCurrent: Dispatch<SetStateAction<boolean>>;
  sticker: string;
}

const StickerSelect = ({
  setSticker,
  setCurrent,
  setIsModal,
  sticker,
}: stickerSelect) => {
  return (
    <div className="absolute bottom-0 z-20 flex flex-col w-full pt-8 bg-white rounded-t-2xl animate-move-top-regular">
      <StickerSelectTitle />
      <StickerSelectImg sticker={sticker} />
      <StickerList stickers={stickers} setSticker={setSticker} />
      <StickerSelectBtnContainer
        setIsModal={setIsModal}
        setCurrent={setCurrent}
      />
    </div>
  );
};

const stickers = [
  smile,
  normal,
  angry,
  circle,
  heart,
  star,
  clover,
  cloud,
  sun,
  flower,
  shine,
  check,
  fourDot,
  arrow,
  spring,
  vertical,
];

export default StickerSelect;
