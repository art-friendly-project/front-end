import { type Dispatch, type SetStateAction } from 'react';

interface modalBackground {
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const ModalBackground = ({ setIsModal }: modalBackground) => {
  return (
    <button
      className="absolute top-0 z-20 w-full h-screen bg-black opacity-50"
      onClick={() => {
        setIsModal(false);
      }}
    />
  );
};

export default ModalBackground;
