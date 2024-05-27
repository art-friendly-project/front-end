import character3 from '../assets/images/art-friendly/character3.svg';

const PrepareService = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-9/10">
      <span className="mb-4 text-Display1">이용에 불편을 드려 죄송합니다.</span>
      <span className="text-Subhead-M text-gray-80">
        보다 나은 서비스 제공을 위해 준비중입니다.
      </span>
      <span className="mb-20 text-Subhead-M text-gray-80">
        빠른 시일 내에 준비하여 찾아뵙겠습니다.
      </span>
      <img src={character3} />
    </div>
  );
};

export default PrepareService;
