import { useNavigate } from 'react-router-dom';
import BtnBasic from 'components/common/BtnBasic';
import IntroSwiper from 'components/appIntroduce/IntroSwiper';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const AppIntroduce = () => {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem('accessToken');

  const btnHandler = () => {
    if (accessToken !== null) {
      navigate('/home');
      return;
    }

    navigate('/kakao-login');
  };

  return (
    <div className="flex flex-col items-center w-full h-full pt-10">
      <IntroSwiper />
      <div className="flex items-center mt-2 text-gray-80 animate-bounce">
        <span className="text-body3-M">넘겨서 확인하기</span>
        <MdKeyboardDoubleArrowRight className="ml-1 text-Headline" />
      </div>
      <BtnBasic
        name={'시작하기'}
        fn={btnHandler}
        disable={false}
        style="bottom-5 sticky mt-auto"
      />
    </div>
  );
};

export default AppIntroduce;
