import { type Dispatch, type SetStateAction } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface selectedCalendar {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  selectedTitle: string;
  selectedColor: string;
}

const SelectedCalendar = ({
  setIsModal,
  selectedTitle,
  selectedColor,
}: selectedCalendar) => {
  return (
    <button
      onClick={() => {
        setIsModal((prev) => !prev);
      }}
      className="flex items-center h-10 px-2 ml-auto rounded-lg jutify-center bg-gray-00"
    >
      <div
        className="w-4 h-4 rounded-full"
        style={{ backgroundColor: selectedColor }}
      />
      <span className="ml-2 mr-2 text-Body3-M text-gray-110">
        {selectedTitle}
      </span>
      <IoIosArrowDown className="text-gray-110" />
    </button>
  );
};

export default SelectedCalendar;
