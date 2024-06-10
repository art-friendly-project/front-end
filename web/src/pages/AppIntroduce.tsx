import { useNavigate } from 'react-router-dom';
import BtnBasic from 'components/common/BtnBasic';
import IntroSwiper from 'components/appIntroduce/IntroSwiper';

const AppIntroduce = () => {
  const navigate = useNavigate();

  const userId = localStorage.getItem('myId');

  const btnHandler = () => {
    if (userId !== null) {
      navigate('/home');
      return;
    }

    navigate('/kakao-login');
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <IntroSwiper />
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
