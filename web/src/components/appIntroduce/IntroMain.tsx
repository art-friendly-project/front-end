import introMain from 'assets/images/intro/introMain.svg';

const IntroMain = () => {
  return (
    <div className="flex flex-col w-full pt-[10%] pl-[10%] relative h-full">
      <span className="text-orange-100 text-Display2">Art-Friendly</span>
      <span className="text-Body3-M">전시/행사를 더 가깝게, 더 즐겁게</span>
      <img src={introMain} className="absolute right-0 bottom-10 w-60" />
    </div>
  );
};

export default IntroMain;
