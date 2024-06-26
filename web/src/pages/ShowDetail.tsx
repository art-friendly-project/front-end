import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReviewSection from 'components/showDetail/reviewSection/ReviewSection';
import RankSection from 'components/showDetail/rankSection/RankSection';
import ShowInformationSection from 'components/showDetail/InformationSection/ShowInformationSection';
import PosterSection from 'components/showDetail/posterSection/PosterSection';
import { useAppSelector } from 'hooks';
import { selectEndpoint } from 'store/modules/endpoint';
import useScrollHeight from 'hooks/useScrollHeight';
import useSaveViewedShow from 'hooks/useSaveViewedShow';
import api from 'api';
import { useParams } from 'react-router-dom';

interface showDetailProps {
  showId?: number;
  setShowId?: Dispatch<SetStateAction<number>>;
}

const ShowDetail = ({ showId, setShowId }: showDetailProps) => {
  const [showDetail, setShowDetail] = useState<showDetail>({
    id: 0,
    temperature: 0,
    checkTemperature: '',
    isLike: false,
    hasDambyeolagWritten: false,
    exhibitionInfoRspDto: {
      id: 0,
      title: '',
      detailInfoUrl: '',
      startDate: '',
      endDate: '',
      place: '',
      realmName: '',
      area: '',
      imageUrl: '',
      ticketingUrl: '',
      phone: '',
      price: '',
    },
  });

  const [isModal, setIsModal] = useState(false);
  const showDetailRef = useRef<HTMLDivElement>(null);

  const id = useParams().id;

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

  const fetchShowDetail = async () => {
    try {
      const result: fetchShowDetail = await api.get(
        `/exhibitions?exhibitionId=${showId ?? id}`,
      );
      setShowDetail(result.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchShowDetail();
  }, []);

  useSaveViewedShow(showDetail);

  return (
    <div className="absolute top-0 left-0 z-20 bg-white">
      {isModal ? (
        <div className="absolute top-0 z-30 w-full h-screen bg-black opacity-50" />
      ) : null}
      <div
        className="relative w-full h-full overflow-y-scroll scrollbar-hide"
        ref={showDetailRef}
      >
        <PosterSection showDetail={showDetail} setShowId={setShowId} />
        <ShowInformationSection showDetail={showDetail} />
        <RankSection
          id={showDetail.id}
          checkTemperature={showDetail.checkTemperature}
          isModal={isModal}
          setIsModal={setIsModal}
          setShowDetail={setShowDetail}
        />
        <ReviewSection
          id={showDetail.id}
          hasDambyeolagWritten={showDetail.hasDambyeolagWritten}
        />
      </div>
    </div>
  );
};

export default ShowDetail;
