interface testResultTitleAndProfile {
  title1: string;
  title2: string;
  image: string;
}

const TestResultTitleAndProfile = ({
  title1,
  title2,
  image,
}: testResultTitleAndProfile) => {
  return (
    <div className="relative flex mt-10">
      <div className="flex flex-col pl-6">
        <span className="text-Subhead-M">{title1}</span>
        <span className="mt-2 text-Display1">{title2}</span>
        <span className="flex items-center justify-center w-40 h-8 mt-2 text-white bg-orange-100 rounded-3xl text-Body1">
          전체 테스트 유형 중 2.5%
        </span>
      </div>
      <img src={image} className="absolute right-6" />
    </div>
  );
};

export default TestResultTitleAndProfile;
