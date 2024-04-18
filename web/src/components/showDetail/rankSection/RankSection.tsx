import RankTitle from './RankTitle';
import RankList from './RankIconList';

interface rankSection {
  rank: number;
}

const RankSection = ({ rank }: rankSection) => {
  return (
    <div className="w-full mt-8 border-b-10 border-b-gray-00">
      <RankTitle />
      <RankList rank={rank} />
    </div>
  );
};

export default RankSection;
