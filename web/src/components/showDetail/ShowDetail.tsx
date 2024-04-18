import { homeShows } from 'mock/mockData';
import { useParams } from 'react-router-dom';
import PosterSection from './PosterSection';
import ShowInformationSection from './ShowInformationSection';
import RankSection from './RankSection';

const ShowDetail = () => {
  const params = useParams();
  const id = Number(params.id) - 1;
  const show = homeShows[id];

  return (
    <>
      <PosterSection show={show} />
      <ShowInformationSection show={show} />
      <RankSection />
    </>
  );
};

export default ShowDetail;
