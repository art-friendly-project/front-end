import { useState, type Dispatch, type SetStateAction } from 'react';
import StickerSelect from './StickerSelect';
import StickerComment from './StickerComment';

interface stickerModal {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setReview: Dispatch<SetStateAction<reviewDetail>>;
  id: number;
}

const StickerModal = ({ setIsModal, setReview, id }: stickerModal) => {
  const [current, setCurrent] = useState(false);
  const [sticker, setSticker] = useState('');
  const [stickerType, setStickerType] = useState('');
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
          stickerType={stickerType}
          text={text}
          setText={setText}
          setIsModal={setIsModal}
          id={id}
          setReview={setReview}
        />
      ) : (
        <StickerSelect
          setSticker={setSticker}
          setStickerType={setStickerType}
          setIsModal={setIsModal}
          setCurrent={setCurrent}
          sticker={sticker}
        />
      )}
    </>
  );
};

export default StickerModal;
