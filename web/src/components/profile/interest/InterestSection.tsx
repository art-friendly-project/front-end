import InterestList from './InterestList';
import InterestSectionTitle from './InterestSectionTitle';
import ResetBtn from './ResetBtn';

interface interestSection {
  artPreferenceTypeList: string[];
}

const InterestSection = ({ artPreferenceTypeList }: interestSection) => {
  return (
    <div className="relative shrink-0 flex flex-col pl-[5%] mt-8 w-full overflow-x-scroll scrollbar-hide">
      <InterestSectionTitle />
      <ResetBtn />
      <InterestList artPreferenceTypeList={artPreferenceTypeList} />
    </div>
  );
};

export default InterestSection;
