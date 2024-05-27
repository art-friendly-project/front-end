import IntroImg from './IntroImg';
import IntroText from './IntroText';
import introThird from 'assets/images/intro/introThird.svg';

const IntroThird = () => {
  return (
    <div className="flex flex-col items-center mt-[10%]">
      <IntroText
        title="전시/행사 감상 나누기"
        body={`전시/행사를 다녀오고 느꼈던 점들을 나눌 수 있어요.\n담벼락을 같이 채워볼까요?`}
      />
      <IntroImg img={introThird} />
    </div>
  );
};

export default IntroThird;
