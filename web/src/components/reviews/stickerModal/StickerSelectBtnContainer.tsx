import { type Dispatch, type SetStateAction } from 'react';

interface stickerSelectBtnContainer {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setCurrent: Dispatch<SetStateAction<boolean>>;
  sticker: string;
}

const StickerSelectBtnContainer = ({
  setIsModal,
  setCurrent,
  sticker,
}: stickerSelectBtnContainer) => {
  return (
    <div className="absolute flex justify-center w-full bottom-6 px-[5%]">
      <button
        className="w-1/2 h-12 border-2 border-orange-100 rounded-lg active:bg-gray-acitve-100 left-7 bottom-4 text-Subhead text-gray-110"
        onClick={() => {
          setIsModal(false);
          setCurrent(false);
        }}
      >
        취소하기
      </button>
      <button
        className={`w-1/2 h-12 ml-4 text-white rounded-lg active:bg-orange-dark-100 right-7 bottom-4 text-Subhead ${sticker.length === 0 ? 'bg-orange-50' : 'bg-orange-100'}`}
        disabled={sticker.length === 0}
        onClick={() => {
          setCurrent(true);
        }}
      >
        붙이기
      </button>
    </div>
  );
};

export default StickerSelectBtnContainer;
