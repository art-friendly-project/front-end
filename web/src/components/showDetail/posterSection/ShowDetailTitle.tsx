import calculateRemainDay from 'utils/calculateRemainDay';

interface showDetailTitle {
  showType: string;
  name: string;
  term: string;
}

const ShowDetailTitle = ({ showType, name, term }: showDetailTitle) => {
  const remainDay = calculateRemainDay(term);
  return (
    <div className="absolute z-20 flex flex-col text-white top-36 left-6">
      <span className="text-Body3">{showType}</span>
      <span className="mt-2 text-Display1">{name}</span>
      <div className="flex mt-1">
        <span className="text-Subhead-M">{term}</span>
        {remainDay >= 0 ? (
          <span className="flex items-center justify-center h-6 mt-0.5 ml-2 bg-orange-100 rounded-2xl px-2 text-Body1-M">{`${remainDay}일 남음`}</span>
        ) : (
          <span className="flex items-center justify-center h-6 mt-0.5 ml-2 bg-purple-90 rounded-2xl px-2 text-Body1-M">
            종료
          </span>
        )}
      </div>
    </div>
  );
};

export default ShowDetailTitle;
