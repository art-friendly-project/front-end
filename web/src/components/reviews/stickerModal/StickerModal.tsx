import { useState, type Dispatch, type SetStateAction } from 'react';
import StickerSelect from './StickerSelect';
import StickerComment from './StickerComment';

interface stickerModal {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setReview: Dispatch<SetStateAction<reviewDetail>>;
}

const StickerModal = ({ setIsModal, setReview }: stickerModal) => {
  const [current, setCurrent] = useState(false);
  const [sticker, setSticker] = useState('');
  const [text, setText] = useState('');
  return (
    <>
      <button
        className="absolute bottom-0 z-30 w-full h-screen bg-black opacity-50"
        onClick={() => {
          setIsModal(false);
          setCurrent(false);
        }}
      />
      {current ? (
        <StickerComment
          sticker={sticker}
          text={text}
          setText={setText}
          setIsModal={setIsModal}
          setReview={setReview}
        />
      ) : (
        <StickerSelect
          setSticker={setSticker}
          setIsModal={setIsModal}
          setCurrent={setCurrent}
          sticker={sticker}
        />
      )}
    </>
  );
};

export default StickerModal;
