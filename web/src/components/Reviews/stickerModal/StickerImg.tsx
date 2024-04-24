import { type Dispatch, type SetStateAction } from 'react';

interface stickerImg {
  sticker: string;
  setSticker: Dispatch<SetStateAction<string>>;
  setCurrent: Dispatch<SetStateAction<boolean>>;
}

const StickerImg = ({ sticker, setSticker, setCurrent }: stickerImg) => {
  return (
    <button
      className="flex items-center justify-center w-1/4"
      onClick={() => {
        setSticker(sticker);
        setCurrent(true);
      }}
    >
      <img src={sticker} className="w-20 h-20" />
    </button>
  );
};

export default StickerImg;
