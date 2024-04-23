import calculateRemainDay from 'utils/calculateRemainDay';

interface showInfo {
  name: string;
  term: string;
}

const ShowInfo = ({ name, term }: showInfo) => {
  const remainDay = calculateRemainDay(term);

  return (
    <div className="flex flex-col items-start mt-2 ml-4">
      <span className="text-Body3 text-gray-110">{name}</span>
      <span className="text-Body2-M text-gray-80">{term}</span>
      <span className="flex items-center justify-center w-16 h-6 mt-4 text-white bg-orange-100 rounded-2xl text-Body1-M">
        {remainDay >= 0
          ? `${remainDay}일 남음`
          : `${String(remainDay).slice(1)}일 지남`}
      </span>
    </div>
  );
};

export default ShowInfo;
