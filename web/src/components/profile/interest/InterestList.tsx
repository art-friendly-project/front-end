import Interest from './Interest';

interface interestList {
  artPreferenceTypeList: string[];
}

const InterestList = ({ artPreferenceTypeList }: interestList) => {
  return (
    <div className="flex w-full mt-4 overflow-x-scroll scrollbar-hide">
      {artPreferenceTypeList.map((interest) => (
        <Interest key={interest} interest={interest} />
      ))}
    </div>
  );
};

export default InterestList;
