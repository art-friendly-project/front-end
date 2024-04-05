import { IoHeart } from 'react-icons/io5';

const SelectCover = () => {
  return (
    <div className="absolute flex items-center justify-center bg-orange-100 w-9/10 opacity-65 h-28 rounded-xl animate-appear-mid">
      <IoHeart className="w-12 h-12 text-white" />
    </div>
  );
};

export default SelectCover;
