import { homeShows } from 'mock/mockData';
import { useParams } from 'react-router-dom';
import PosterSection from './posterSection/PosterSection';
import ShowInformationSection from './InformationSection/ShowInformationSection';
import RankSection from './rankSection/RankSection';

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
