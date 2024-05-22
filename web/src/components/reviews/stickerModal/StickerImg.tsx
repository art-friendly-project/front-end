import { type Dispatch, type SetStateAction } from 'react';

interface stickerImg {
  sticker: string;
  setSticker: Dispatch<SetStateAction<string>>;
}

const StickerImg = ({ sticker, setSticker }: stickerImg) => {
  return (
    <button
      className="flex w-16 h-16 mb-2 rounded-lg active:bg-gray-00"
      onClick={() => {
        setSticker(sticker);
      }}
    >
      <img src={sticker} />
    </button>
  );
};

export default StickerImg;
