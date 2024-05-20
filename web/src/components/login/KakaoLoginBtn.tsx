import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from 'api';
import kakaoLogo from 'assets/images/etc/kakaoLogo.svg';

const KakaoLoginBtn = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const code = searchParams.get('oneTimeUseCode');
  const isSignUp = searchParams.get('isSignUp');

  const loginBtnHandler = () => {
    window.location.href =
      'https://artfriendly.duckdns.org/oauth2/authorization/kakao';
  };

  const fetchLogin = async () => {
    try {
      const response: auth = await api.get(`/oauth/token?code=${code}`);

      localStorage.setItem('accessToken', response.data.data.accessToken);
      localStorage.setItem('refreshToken', response.data.data.refreshToken);

      if (isSignUp === 'true') {
        navigate('/home');
      }

      if (isSignUp === 'false') {
        navigate('/terms-of-use');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (code !== null) {
      void fetchLogin();
    }
  }, [code]);

  return (
    <button
      className="absolute active:bg-kakaoDarkYellow flex items-center justify-center h-16 rounded-md bottom-[5%] w-9/10 bg-kakaoYellow"
      onClick={loginBtnHandler}
    >
      <img src={kakaoLogo} className="absolute h-6 left-8" />
      <span className="text-Subhead">카카오로 시작하기</span>
    </button>
  );
};

export default KakaoLoginBtn;
