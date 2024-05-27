interface informationBoard {
  StickerCount: number;
  dambyeolagCount: number;
  interestedExhibitionCount: number;
}

const InformationBoard = ({
  StickerCount,
  dambyeolagCount,
  interestedExhibitionCount,
}: informationBoard) => {
  return (
    <div className="flex justify-center w-full mt-8">
      <div className="flex flex-col items-center justify-center w-1/3 h-10 my-2 border-r-2 border-gray-20">
        <span className="text-Body2-M text-gray-80">작성한 담벼락</span>
        <span className="mt-1 text-Body3 text-gray-110">
          {dambyeolagCount}개
        </span>
      </div>
      <div className="flex flex-col items-center justify-center w-1/3 h-10 my-2 border-r-2 border-gray-20">
        <span className="text-Body2-M text-gray-80">스티커</span>
        <span className="mt-1 text-Body3 text-gray-110">{StickerCount}개</span>
      </div>
      <div className="flex flex-col items-center justify-center w-1/3 h-10 my-2">
        <span className="text-Body2-M text-gray-80">관심 전시</span>
        <span className="mt-1 text-Body3 text-gray-110">
          {interestedExhibitionCount}개
        </span>
      </div>
    </div>
  );
};

export default InformationBoard;
