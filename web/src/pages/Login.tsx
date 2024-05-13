import LoginTitle from 'components/login/LoginTitle';
import character from '../assets/images/art-friendly/character.svg';
import KakaoLoginBtn from 'components/login/KakaoLoginBtn';

const Login = () => {
  return (
    <div className="flex flex-col items-center w-full h-full mt-[22%]">
      <LoginTitle />
      <img src={character} className="absolute top-[40%] w-44" />
      <KakaoLoginBtn />
    </div>
  );
};

export default Login;
