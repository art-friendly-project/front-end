import { useNavigate } from 'react-router-dom';
import BtnBasic from 'components/common/BtnBasic';
import IntroSwiper from 'components/appIntroduce/IntroSwiper';

const AppIntroduce = () => {
  const navigate = useNavigate();
  const btnHandler = () => {
    navigate('/kakao-login');
  };
  return (
    <div className="flex flex-col items-center w-full h-full overflow-y-scroll scrollbar-hide">
      <IntroSwiper />
      <BtnBasic
        name={'시작하기'}
        fn={btnHandler}
        disable={false}
        style="mt-auto mb-[5%]"
      />
    </div>
  );
};

export default AppIntroduce;
