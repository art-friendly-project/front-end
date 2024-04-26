import { type Dispatch, type SetStateAction } from 'react';
import { BsStars } from 'react-icons/bs';

interface stickerBtn {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setSelectedToast: Dispatch<SetStateAction<number>>;
}

const StickerBtn = ({ setIsModal, setSelectedToast }: stickerBtn) => {
  return (
    <button
      className="flex items-center justify-center w-32 h-12 border rounded-3xl border-gray-60"
      onClick={() => {
        setSelectedToast(0);
        setIsModal(true);
      }}
    >
      <BsStars className="text-orange-100 w-7 h-7" />
      <span className="ml-2 text-Body3 text-gray-110">스티커 +</span>
    </button>
  );
};

export default StickerBtn;
