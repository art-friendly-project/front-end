import { type Dispatch, type SetStateAction } from 'react';

interface stickerImg {
  sticker: string;
  setSticker: Dispatch<SetStateAction<string>>;
}

const StickerImg = ({ sticker, setSticker }: stickerImg) => {
  return (
    <button
      className="flex items-center justify-center w-1/4 shrink-0"
      onClick={() => {
        setSticker(sticker);
      }}
    >
      <img src={sticker} className="w-20 h-20" />
    </button>
  );
};

export default StickerImg;
