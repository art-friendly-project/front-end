import IntroImg from './IntroImg';
import IntroText from './IntroText';
import introSecond from 'assets/images/intro/introSecond.svg';

const IntroSecond = () => {
  return (
    <div className="flex flex-col items-center">
      <IntroText
        title="내가 좋아하는 전시/행사 찾기"
        body={`가고 싶은 전시/행사를 관심 목록에 저장할 수 있어요.\n인기 있는 전시/행사는 온도가 올라가요!`}
      />
      <IntroImg img={introSecond} />
    </div>
  );
};

export default IntroSecond;
