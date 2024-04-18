import { homeShows } from 'mock/mockData';
import { useParams } from 'react-router-dom';
import ReviewSection from 'components/showDetail/reviewSection/ReviewSection';
import RankSection from 'components/showDetail/rankSection/RankSection';
import ShowInformationSection from 'components/showDetail/InformationSection/ShowInformationSection';
import PosterSection from 'components/showDetail/posterSection/PosterSection';

const ShowDetail = () => {
  const params = useParams();
  const id = Number(params.id);
  const show = homeShows[id - 1];

  return (
    <div className="relative w-full h-full overflow-y-scroll scrollbar-hide">
      <PosterSection show={show} />
      <ShowInformationSection show={show} />
      <RankSection rank={show.rank} />
      <ReviewSection id={id} />
    </div>
  );
};

export default ShowDetail;
