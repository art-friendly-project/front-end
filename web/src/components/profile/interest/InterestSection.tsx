import InterestList from './InterestList';
import InterestSectionTitle from './InterestSectionTitle';

interface interestSection {
  interests: string[];
}

const InterestSection = ({ interests }: interestSection) => {
  return (
    <div className="shrink-0 flex flex-col pl-[5%] mt-8 w-full overflow-x-scroll scrollbar-hide">
      <InterestSectionTitle />
      <InterestList interests={interests} />
    </div>
  );
};

export default InterestSection;
