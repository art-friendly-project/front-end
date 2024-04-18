const Spineer = () => {
  return (
    <>
      <div className="relative border-8 border-orange-100 rounded-full w-28 h-28 animate-spin">
        <div className="absolute top-0 w-20 h-24 bg-white -right-14 rounded-2xl" />
      </div>
      <span className="h-20 mt-12 leading-relaxed text-center text-Display1">
        OOO님이 선호하는
        <br />
        전시취향을 분석하고 있어요
      </span>
    </>
  );
};

export default Spineer;
