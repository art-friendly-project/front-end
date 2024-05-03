import { IoIosArrowForward } from 'react-icons/io';

const Instagram = () => {
  return (
    <button className="relative flex items-center w-full h-12 active:bg-gray-00 pl-[5%]">
      <span className="text-Subhead text-gray-110">인스타그램</span>
      <IoIosArrowForward className="absolute right-[5%] w-7 h-7 text-gray-70" />
    </button>
  );
};

export default Instagram;
