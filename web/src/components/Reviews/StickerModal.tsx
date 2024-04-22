import { useState, type Dispatch, type SetStateAction } from 'react';
import CloseBtn from './CloseBtn';
import StickerSelect from './StickerSelect';
import StickerComment from './StickerComment';

interface stickerModal {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setIsStickerOk: Dispatch<SetStateAction<boolean>>;
  setReview: Dispatch<SetStateAction<review>>;
}

const StickerModal = ({
  setIsModal,
  setIsStickerOk,
  setReview,
}: stickerModal) => {
  const [current, setCurrent] = useState(false);
  const [sticker, setSticker] = useState('');
  const [text, setText] = useState('');
  return (
    <>
      <div className="absolute bottom-0 z-10 w-full h-screen bg-black opacity-50" />
      <div className="absolute bottom-0 z-20 flex w-full bg-white h-1/2 rounded-t-2xl animate-move-top-regular">
        <CloseBtn setIsModal={setIsModal} setCurrent={setCurrent} />
        {current ? (
          <StickerComment
            sticker={sticker}
            text={text}
            setText={setText}
            setIsModal={setIsModal}
            setIsStickerOk={setIsStickerOk}
            setReview={setReview}
          />
        ) : (
          <StickerSelect setSticker={setSticker} setCurrent={setCurrent} />
        )}
      </div>
    </>
  );
};

export default StickerModal;
