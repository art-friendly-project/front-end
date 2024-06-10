import KakaoLoginTitle from 'components/login/KakaoLoginTitle';
import character from '../assets/images/art-friendly/character.svg';
import KakaoLoginBtn from 'components/login/KakaoLoginBtn';

const KakaoLogin = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-screen mt-[22%]">
      <KakaoLoginTitle />
      <img src={character} className="absolute top-[20%] w-44" />
      <KakaoLoginBtn />
    </div>
  );
};

export default KakaoLogin;
