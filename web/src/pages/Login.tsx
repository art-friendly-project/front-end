import LoginTitle from 'components/login/LoginTitle';
import character from '../assets/character.svg';
import KakaoLoginBtn from 'components/login/KakaoLoginBtn';

const Login = () => {
  return (
    <div className="flex flex-col items-center pt-32">
      <LoginTitle />
      <img src={character} className="w-44" />
      <KakaoLoginBtn />
    </div>
  );
};

export default Login;
