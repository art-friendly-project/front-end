import kakaoLogo from 'assets/images/etc/kakaoLogo.svg';

const KakaoLoginBtn = () => {
  const loginBtnHandler = () => {
    window.location.href =
      'https://artfriendly.duckdns.org/oauth2/authorization/kakao';
  };

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
