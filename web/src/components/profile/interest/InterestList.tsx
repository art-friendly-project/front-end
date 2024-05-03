import Interest from './Interest';

interface interestList {
  interests: string[];
}

const InterestList = ({ interests }: interestList) => {
  return (
    <div className="flex mt-4">
      {interests.map((interest) => (
        <Interest key={interest} interest={interest} />
      ))}
    </div>
  );
};

export default InterestList;
