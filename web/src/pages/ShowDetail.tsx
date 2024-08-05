import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from 'api';
import useSaveViewedShow from 'hooks/useSaveViewedShow';
import ReviewSection from 'components/showDetail/reviewSection/ReviewSection';
import RankSection from 'components/showDetail/rankSection/RankSection';
import ShowInformationSection from 'components/showDetail/InformationSection/ShowInformationSection';
import PosterSection from 'components/showDetail/posterSection/PosterSection';
import { useAppSelector } from 'hooks';
import { selectEndpoint } from 'store/modules/endpoint';
import useScrollHeight from 'hooks/useScrollHeight';

const ShowDetail = () => {
  const { id: paramId } = useParams();
  const id = Number(paramId);
  const showDetailRef = useRef<HTMLDivElement>(null);

  const [isModal, setIsModal] = useState(false);

  const getShowDetail = async (id: number) => {
    const res = await api.get(`/exhibitions?exhibitionId=${id}`);
    return res.data.data;
  };

  const { data, isLoading } = useQuery<showDetail>({
    queryKey: ['show', 'detail', id],
    queryFn: async () => await getShowDetail(id),
  });

  const endpoint = useAppSelector(selectEndpoint);
  const scrollHeight = useScrollHeight(showDetailRef);

  useEffect(() => {
    if (endpoint.includes('reviews')) {
      showDetailRef.current?.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [endpoint, scrollHeight]);

  useSaveViewedShow(data);

  if (isLoading || data === undefined) {
    return <></>;
  }

  return (
    <>
      <div
        className="absolute top-0 left-0 z-20 w-full h-full overflow-y-scroll bg-white scrollbar-hide"
        ref={showDetailRef}
      >
        <PosterSection showDetail={data} />
        <ShowInformationSection showDetail={data} />
        <RankSection
          id={data.id}
          checkTemperature={data.checkTemperature}
          isModal={isModal}
          setIsModal={setIsModal}
        />
        <ReviewSection
          id={data.id}
          hasDambyeolagWritten={data.hasDambyeolagWritten}
        />
      </div>
    </>
  );
};

export default ShowDetail;
