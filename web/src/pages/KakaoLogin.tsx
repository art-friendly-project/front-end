import KakaoLoginTitle from 'components/login/KakaoLoginTitle';
import kakaoLoginCharacter from '../assets/images/art-friendly/kakaoLoginCharacter.svg';
import KakaoLoginBtn from 'components/login/KakaoLoginBtn';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const KakaoLogin = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (accessToken !== null) {
      navigate('/home');
    }
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full h-screen mt-[22%]">
      <KakaoLoginTitle />
      <img src={kakaoLoginCharacter} className=" w-60 h-60" />
      <KakaoLoginBtn />
    </div>
  );
};

export default KakaoLogin;
