import { IoIosArrowDropdownCircle } from 'react-icons/io';

const LoadingComplete = () => {
  return (
    <>
      <IoIosArrowDropdownCircle className="w-34.4 h-34.4 text-orange-100 animate-appear-fast" />
      <span className="h-20 mt-12 leading-relaxed text-center text-Display1">
        취향 분석이 완료되었습니다.
      </span>
    </>
  );
};

export default LoadingComplete;
