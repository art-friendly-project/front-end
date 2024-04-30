import { type Dispatch, type SetStateAction } from 'react';
import StickerImg from './StickerImg';

interface stickerList {
  stickerList: string[];
  setSticker: Dispatch<SetStateAction<string>>;
}

const StickerList = ({ stickerList, setSticker }: stickerList) => {
  return (
    <div className="flex flex-wrap w-full h-44 shrink-0">
      {stickerList.map((sticker) => (
        <StickerImg key={sticker} sticker={sticker} setSticker={setSticker} />
      ))}
    </div>
  );
};

export default StickerList;
