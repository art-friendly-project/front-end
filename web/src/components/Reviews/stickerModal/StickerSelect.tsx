import { useState, type Dispatch, type SetStateAction } from 'react';
import StickerSelectTitle from './StickerSelectTitle';
import StickerSelectBtnContainer from './StickerSelectBtnContainer';
import StickerSelectImg from './StickerSelectImg';
import StickerList from './StickerList';
import stickers from 'assets/data/stickers';
import sliceStickers from 'utils/sliceStickers';
import LeftArrowBtn from './LeftArrowBtn';
import RightArrowBtn from './RightArrowBtn';

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
  const [currentPage, setCurrentPage] = useState(0);
  const stickersList = sliceStickers(stickers);

  console.log(currentPage);

  return (
    <div className="absolute bottom-0 z-20 flex flex-col w-full pt-8 bg-white rounded-t-2xl animate-move-top-regular">
      <StickerSelectTitle />
      <StickerSelectImg sticker={sticker} />
      <div className="relative flex overflow-hidden mb-28">
        <LeftArrowBtn
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div
          className="flex duration-700"
          style={{ transform: `translateX(-${currentPage}00%)` }}
        >
          {stickersList.map((stickerList, i) => (
            <StickerList
              key={i}
              stickerList={stickerList}
              setSticker={setSticker}
            />
          ))}
        </div>

        <RightArrowBtn
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          MAX_PAGE={Math.ceil(stickers.length / 8)}
        />
      </div>
      <StickerSelectBtnContainer
        setIsModal={setIsModal}
        setCurrent={setCurrent}
      />
    </div>
  );
};

export default StickerSelect;
