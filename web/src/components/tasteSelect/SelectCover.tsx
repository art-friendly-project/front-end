import { IoHeart } from 'react-icons/io5';

const SelectCover = () => {
  return (
    <div className="absolute flex items-center justify-center bg-orange-100 w-9/10 h-28 rounded-xl opacity-90 animate-appear-fast">
      <IoHeart className="w-12 h-12 text-white" />
    </div>
  );
};

export default SelectCover;
