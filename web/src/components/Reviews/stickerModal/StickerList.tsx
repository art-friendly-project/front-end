import { type Dispatch, type SetStateAction } from 'react';
import StickerImg from './StickerImg';

interface stickerList {
  stickers: string[];
  setSticker: Dispatch<SetStateAction<string>>;
}

const StickerList = ({ stickers, setSticker }: stickerList) => {
  return (
    <div className="flex h-40 overflow-x-scroll mb-28 scrollbar-hide">
      {stickers.map((sticker) => (
        <StickerImg key={sticker} sticker={sticker} setSticker={setSticker} />
      ))}
    </div>
  );
};

export default StickerList;
