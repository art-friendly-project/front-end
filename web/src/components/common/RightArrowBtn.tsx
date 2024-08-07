import { IoIosArrowForward } from 'react-icons/io';

interface btnAndRightArrow {
  fn: () => void;
  name: string;
  disable?: boolean;
  style?: string;
}

const RightArrowBtn = ({
  fn,
  name,
  disable = false,
  style,
}: btnAndRightArrow) => {
  return (
    <button
      className={`flex items-center justify-center h-12 text-white rounded-md w-9/10 active:bg-orange-dark-100 ${disable ? 'bg-orange-50' : 'bg-orange-100'} ${style}`}
      disabled={disable}
      onClick={fn}
    >
      <span className="mr-1 text-Subhead">{name}</span>
      <IoIosArrowForward />
    </button>
  );
};

export default RightArrowBtn;
