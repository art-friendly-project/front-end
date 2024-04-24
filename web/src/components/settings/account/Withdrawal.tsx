import { IoIosArrowForward } from 'react-icons/io';

const Withdrawal = () => {
  return (
    <button className="relative flex w-full mt-6">
      <span className="text-Subhead text-gray-110">회원탈퇴</span>
      <IoIosArrowForward className="absolute right-[5%] w-7 h-7 text-gray-70" />
    </button>
  );
};

export default Withdrawal;
