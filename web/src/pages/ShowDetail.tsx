import { homeShows } from 'mock/mockData';
import { useParams } from 'react-router-dom';
import PosterSection from '../components/showDetail/posterSection/PosterSection';
import ShowInformationSection from '../components/showDetail/InformationSection/ShowInformationSection';
import RankSection from '../components/showDetail/rankSection/RankSection';

const ShowDetail = () => {
  const params = useParams();
  const id = Number(params.id) - 1;
  const show = homeShows[id];

  return (
    <>
      <PosterSection show={show} />
      <ShowInformationSection show={show} />
      <RankSection rank={show.rank} />
    </>
  );
};

export default ShowDetail;
