import { homeShows } from 'mock/mockData';
import { useLocation, useParams } from 'react-router-dom';
import ReviewSection from 'components/showDetail/reviewSection/ReviewSection';
import RankSection from 'components/showDetail/rankSection/RankSection';
import ShowInformationSection from 'components/showDetail/InformationSection/ShowInformationSection';
import PosterSection from 'components/showDetail/posterSection/PosterSection';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { endpointActions, selectEndpoint } from 'store/modules/endpoint';
import useScrollHeight from 'hooks/useScrollHeight';
import useSaveViewedShow from 'hooks/useSaveViewedShow';

const ShowDetail = () => {
  const showDetailRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const pathname = location.pathname;

  const endpoint = useAppSelector(selectEndpoint);
  const dispatch = useAppDispatch();

  const params = useParams();
  const id = Number(params.id);
  const show = homeShows[id - 1];

  const scrollHeight = useScrollHeight(showDetailRef);

  useEffect(() => {
    if (endpoint.includes('reviews') || endpoint === 'myReivew') {
      showDetailRef.current?.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [endpoint, scrollHeight]);

  useEffect(() => {
    dispatch(endpointActions.current(pathname));
  }, [pathname]);

  useSaveViewedShow(show);

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
