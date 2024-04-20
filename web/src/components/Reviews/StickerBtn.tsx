import { BsStars } from 'react-icons/bs';

const StickerBtn = () => {
  return (
    <button className="flex items-center justify-center w-32 h-12 border rounded-3xl border-gray-60">
      <BsStars className="text-orange-100 w-7 h-7" />
      <span className="ml-2 text-Body3 text-gray-110">스티커 +</span>
    </button>
  );
};

export default StickerBtn;
