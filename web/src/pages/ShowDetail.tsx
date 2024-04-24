import { homeShows } from 'mock/mockData';
import { useParams } from 'react-router-dom';
import ReviewSection from 'components/showDetail/reviewSection/ReviewSection';
import RankSection from 'components/showDetail/rankSection/RankSection';
import ShowInformationSection from 'components/showDetail/InformationSection/ShowInformationSection';
import PosterSection from 'components/showDetail/posterSection/PosterSection';
import { useEffect, useRef } from 'react';
import { useAppSelector } from 'hooks';
import { selectEndpoint } from 'store/modules/endpoint';
import useScrollHeight from 'hooks/useScrollHeight';

const ShowDetail = () => {
  const showDetailRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const id = Number(params.id);
  const endpoint = useAppSelector(selectEndpoint);
  const scrollHeight = useScrollHeight(showDetailRef);

  const show = homeShows[id - 1];

  useEffect(() => {
    const localViewedShowList = localStorage.getItem('viewedShowList');

    const showData = {
      id: show.id,
      showType: show.showType,
      name: show.name,
      location: show.location,
      term: show.term,
      image: show.image,
      favorite: show.favorite,
      temperature: show.temperature,
    };

    if (localViewedShowList === null) {
      const showDataJson = JSON.stringify({ [show.id]: showData });

      localStorage.setItem('viewedShowList', showDataJson);
    }

    if (localViewedShowList !== null) {
      const viewedShowList = JSON.parse(localViewedShowList);
      viewedShowList[show.id] = showData;
      const AddViewedShowListJson = JSON.stringify(viewedShowList);

      localStorage.setItem('viewedShowList', AddViewedShowListJson);
    }
  }, [show]);

  useEffect(() => {
    if (endpoint.includes('reviews')) {
      showDetailRef.current?.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [endpoint, scrollHeight]);

  return (
    <div
      className="relative w-full h-full overflow-y-scroll scrollbar-hide"
      ref={showDetailRef}
    >
      <PosterSection show={show} />
      <ShowInformationSection show={show} />
      <RankSection rank={show.rank} />
      <ReviewSection id={id} />
    </div>
  );
};

export default ShowDetail;
