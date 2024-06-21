import { IoIosArrowForward } from 'react-icons/io';

const ImprovementComments = () => {
  const btnHandler = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdo3H2UK63myWMdRkPyG29_HvdtlfPkyG0v5tXvgLJh_9b0hg/viewform',
    );
  };
  return (
    <button
      className="relative flex items-center w-full h-12 active:bg-gray-00 pl-[5%]"
      onClick={btnHandler}
    >
      <span className="text-Subhead text-gray-110">개선 의견 보내기</span>
      <IoIosArrowForward className="absolute right-[5%] w-7 h-7 text-gray-70" />
    </button>
  );
};

export default ImprovementComments;
