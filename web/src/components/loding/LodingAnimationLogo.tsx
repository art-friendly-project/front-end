import innerLogo from '../../assets/innerLogo.svg';

interface lodingAnimationlogo {
  disappear: boolean;
}

const LodingAnimationLogo = ({ disappear }: lodingAnimationlogo) => {
  return (
    <div className="flex items-center justify-center bg-orange-100 rounded-full w-44 h-44">
      {disappear ? null : (
        <div className="relative -left-[4rem] top-24 animate-move-top">
          <div className="absolute bg-white -left-4 rounded-[45%] rotate-[45deg] w-36 h-36 bottom-10 animate-spin-slow" />
          <div className="absolute bg-white left-0 rounded-[35%] rotate-[45deg] w-40 h-40 bottom-12 animate-spin-slow" />
          <div className="absolute bg-white left-[3rem] rounded-[45%] rotate-[45deg] w-36 h-36 bottom-[3.3rem] animate-spin-slow" />
          <div className="absolute bg-white left-[5rem] rounded-[35%] rotate-[45deg] w-40 h-40 bottom-12 animate-spin-slow" />
          <div className="absolute bg-white left-28 rounded-[45%] rotate-[45deg] w-36 h-36 bottom-11 animate-spin-slow" />
        </div>
      )}
      <img src={innerLogo} className="mb-2 w-28 h-28 animate-appear-slow" />
    </div>
  );
};

export default LodingAnimationLogo;
