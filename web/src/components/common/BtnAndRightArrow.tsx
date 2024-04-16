import { IoIosArrowForward } from 'react-icons/io';

interface btnAndRightArrow {
  selectedList?: string[];
  fn: () => void;
  name: string;
}

const BtnAndRightArrow = ({ selectedList, fn, name }: btnAndRightArrow) => {
  const BtnStyle = () => {
    if (selectedList === undefined) {
      return `flex items-center justify-center h-12 text-white rounded-md w-9/10 bg-orange-100`;
    }

    if (selectedList !== undefined) {
      return `flex items-center justify-center h-12 text-white rounded-md w-9/10 ${selectedList.length > 0 ? 'bg-orange-100' : 'bg-orange-50'}`;
    }
  };

  return (
    <button
      className={BtnStyle()}
      disabled={selectedList !== undefined ? !(selectedList.length > 0) : false}
      onClick={fn}
    >
      <span className="mr-1 text-Subhead">{name}</span>
      <IoIosArrowForward />
    </button>
  );
};

export default BtnAndRightArrow;
