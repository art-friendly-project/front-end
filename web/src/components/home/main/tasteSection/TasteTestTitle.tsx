import tasteTestIcon from 'assets/images/etc/tasteTestIcon.svg';

const TasteTestTitle = () => {
  return (
    <>
      <span className="w-full mt-6 mb-1 pl-[5%] text-Headline">
        취향 분석 테스트
      </span>
      <span className="w-full mb-4 pl-[5%] text-Body3-M text-gray-80">
        나는 어떤 전시 유형일까?
      </span>
      <img src={tasteTestIcon} className="absolute w-21 h-21 right-4 top-4" />
    </>
  );
};

export default TasteTestTitle;
