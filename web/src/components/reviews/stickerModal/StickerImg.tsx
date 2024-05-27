import { type Dispatch, type SetStateAction } from 'react';
import findKeyByValue from 'utils/findKeybyValue';

interface stickerImg {
  sticker: string;
  setSticker: Dispatch<SetStateAction<string>>;
  setStickerType: Dispatch<SetStateAction<string>>;
}

const StickerImg = ({ sticker, setSticker, setStickerType }: stickerImg) => {
  const stickerImg = findKeyByValue(sticker);

  return (
    <button
      className="flex w-16 h-16 mb-2 rounded-lg active:bg-gray-00"
      onClick={() => {
        setSticker(sticker);
        if (stickerImg !== undefined) setStickerType(stickerImg);
      }}
    >
      <img src={sticker} />
    </button>
  );
};

export default StickerImg;
