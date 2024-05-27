import Interest from './Interest';

interface interestList {
  artPreferenceTypeList: string[];
}

const InterestList = ({ artPreferenceTypeList }: interestList) => {
  return (
    <div className="flex mt-4">
      {artPreferenceTypeList.map((interest) => (
        <Interest key={interest} interest={interest} />
      ))}
    </div>
  );
};

export default InterestList;
