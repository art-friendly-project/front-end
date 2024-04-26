const InformationBoard = () => {
  return (
    <div className="flex justify-center w-full mt-8">
      <div className="flex flex-col items-center justify-center w-1/3 h-10 my-2 border-r-2 border-gray-20">
        <span className="text-Body2-M text-gray-80">방문 전시/행사</span>
        <span className="mt-1 text-Body3 text-gray-110">1개</span>
      </div>
      <div className="flex flex-col items-center justify-center w-1/3 h-10 my-2 border-r-2 border-gray-20">
        <span className="text-Body2-M text-gray-80">담벼락</span>
        <span className="mt-1 text-Body3 text-gray-110">1개</span>
      </div>
      <div className="flex flex-col items-center justify-center w-1/3 h-10 my-2">
        <span className="text-Body2-M text-gray-80">획득 뱃지</span>
        <span className="mt-1 text-Body3 text-gray-110">1개</span>
      </div>
    </div>
  );
};

export default InformationBoard;