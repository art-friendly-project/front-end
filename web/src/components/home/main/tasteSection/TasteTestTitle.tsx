import tasteTestIcon from 'assets/images/etc/tasteTestIcon.svg';

const TasteTestTitle = () => {
  return (
    <>
      <span className="w-full mt-6 mb-2 pl-[5%] text-Headline">
        취향 분석 테스트
      </span>
      <span className="w-full mb-10 pl-[5%] text-Body3-M text-gray-80">
        나는 어떤 전시 유형일까?
      </span>
      <img src={tasteTestIcon} className="absolute right-10 top-6" />
    </>
  );
};

export default TasteTestTitle;
