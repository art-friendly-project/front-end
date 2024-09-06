import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSaveViewedShow from 'hooks/useSaveViewedShow';
import ReviewSection from 'components/showDetail/reviewSection/ReviewSection';
import RankSection from 'components/showDetail/rankSection/RankSection';
import ShowInformationSection from 'components/showDetail/InformationSection/ShowInformationSection';
import PosterSection from 'components/showDetail/posterSection/PosterSection';
import { useAppSelector } from 'hooks';
import { selectEndpoint } from 'store/modules/endpoint';
import useScrollHeight from 'hooks/useScrollHeight';
import { useGetShowDetail } from 'hooks/query/useGetShowDetail';

const ShowDetail = () => {
  const { id: paramId } = useParams();
  const id = Number(paramId);
  const showDetailRef = useRef<HTMLDivElement>(null);

  const data = useGetShowDetail(id);

  const [isModal, setIsModal] = useState(false);

  const endpoint = useAppSelector(selectEndpoint);
  const scrollHeight = useScrollHeight(showDetailRef);

  useEffect(() => {
    if (endpoint.includes('reviews')) {
      showDetailRef.current?.scrollTo({
        top: scrollHeight,
      });
    }
  }, [endpoint, scrollHeight]);

  useSaveViewedShow(data);

  if (data === undefined) {
    return <></>;
  }

  return (
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
  );
};

export default ShowDetail;
