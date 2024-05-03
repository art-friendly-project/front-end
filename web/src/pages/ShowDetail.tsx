import { homeShows } from 'mock/mockData';
import { useParams } from 'react-router-dom';
import ReviewSection from 'components/showDetail/reviewSection/ReviewSection';
import RankSection from 'components/showDetail/rankSection/RankSection';
import ShowInformationSection from 'components/showDetail/InformationSection/ShowInformationSection';
import PosterSection from 'components/showDetail/posterSection/PosterSection';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from 'hooks';
import { selectEndpoint } from 'store/modules/endpoint';
import useScrollHeight from 'hooks/useScrollHeight';
import useSaveViewedShow from 'hooks/useSaveViewedShow';

const ShowDetail = () => {
  const [isModal, setIsModal] = useState(false);
  const showDetailRef = useRef<HTMLDivElement>(null);

  const endpoint = useAppSelector(selectEndpoint);

  const params = useParams();
  const id = Number(params.id);
  const show = homeShows[id - 1];

  const scrollHeight = useScrollHeight(showDetailRef);

  useEffect(() => {
    if (endpoint.includes('reviews')) {
      showDetailRef.current?.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [endpoint, scrollHeight]);

  useSaveViewedShow(show);

  return (
    <>
      {isModal ? (
        <div className="absolute top-0 z-30 w-full h-screen bg-black opacity-50" />
      ) : null}
      <div
        className="relative w-full h-full overflow-y-scroll scrollbar-hide"
        ref={showDetailRef}
      >
        <PosterSection show={show} />
        <ShowInformationSection show={show} />
        <RankSection
          rank={show.rank}
          isModal={isModal}
          setIsModal={setIsModal}
        />
        <ReviewSection id={id} />
      </div>
    </>
  );
};

export default ShowDetail;
