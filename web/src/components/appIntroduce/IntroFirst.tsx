import IntroImg from './IntroImg';
import IntroText from './IntroText';
import introFirst from 'assets/images/intro/introFirst.png';

const IntroFirst = () => {
  return (
    <div className="flex flex-col items-center">
      <IntroText
        title="내 주변 다양한 전시/행사 정보"
        body={`집 근처에 재미있는 전시/행사가 있었는데 못간 적 있나요?\n서울부터 제주까지 전시/행사를 정리해뒀어요.`}
      />
      <IntroImg img={introFirst} />
    </div>
  );
};

export default IntroFirst;
