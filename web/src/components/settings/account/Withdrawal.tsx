import { IoIosArrowForward } from 'react-icons/io';

const Withdrawal = () => {
  return (
    <button className="relative flex items-center w-full h-12 pl-[5%] active:bg-gray-00">
      <span className="text-Subhead text-gray-110">회원탈퇴</span>
      <IoIosArrowForward className="absolute right-[5%] w-7 h-7 text-gray-70" />
    </button>
  );
};

export default Withdrawal;
