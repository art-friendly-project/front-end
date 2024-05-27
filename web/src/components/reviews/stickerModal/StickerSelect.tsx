import { type Dispatch, type SetStateAction } from 'react';

import StickerSelectTitle from './StickerSelectTitle';
import StickerSelectBtnContainer from './StickerSelectBtnContainer';
import StickerSelectImg from './StickerSelectImg';
import StickerSwiper from './StickerSwiper';

interface stickerSelect {
  setSticker: Dispatch<SetStateAction<string>>;
  setStickerType: Dispatch<SetStateAction<string>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setCurrent: Dispatch<SetStateAction<boolean>>;
  sticker: string;
}

const StickerSelect = ({
  setSticker,
  setStickerType,
  setCurrent,
  setIsModal,
  sticker,
}: stickerSelect) => {
  return (
    <div className="absolute bottom-0 z-30 flex flex-col w-full pt-8 bg-white rounded-t-2xl animate-move-top-regular">
      <StickerSelectTitle />
      <StickerSelectImg sticker={sticker} />
      <StickerSwiper setSticker={setSticker} setStickerType={setStickerType} />
      <StickerSelectBtnContainer
        setIsModal={setIsModal}
        setCurrent={setCurrent}
        sticker={sticker}
      />
    </div>
  );
};

export default StickerSelect;
