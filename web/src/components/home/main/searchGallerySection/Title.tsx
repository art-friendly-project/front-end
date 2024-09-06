import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Title = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col pl-[5%] ">
      <button
        className="flex items-center"
        onClick={() => {
          navigate('search-gallery');
        }}
      >
        <span className="text-Headline">내 주변 미술관 찾기</span>
        <IoIosArrowForward className="ml-1 text-Headline text-gray-70" />
      </button>
      <span className="mt-1 text-Body3-M text-gray-80">
        지역별로 미술관을 찾아보아요
      </span>
    </div>
  );
};

export default Title;
