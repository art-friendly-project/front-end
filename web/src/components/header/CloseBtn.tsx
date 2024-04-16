import { IoIosClose } from 'react-icons/io';

import { useState } from 'react';
import CloseConfirmModal from './CloseConfirmModal';

const CloseBtn = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <button
        className="absolute right-3"
        onClick={() => {
          setIsModal(true);
        }}
      >
        <IoIosClose className="w-12 h-12" />
      </button>
      {isModal ? <CloseConfirmModal setIsModal={setIsModal} /> : null}
    </>
  );
};

export default CloseBtn;
