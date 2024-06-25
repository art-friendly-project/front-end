import { type Dispatch, type SetStateAction } from 'react';
import ShowDetailBackBtn from './ShowDetailBackBtn';
import ShowDetailImg from './ShowDetailImg';
import ShowDetailTitle from './ShowDetailTitle';
import Thermometer from './Thermometer';
import FavoriteBtn from 'components/showDetail/posterSection/FavoriteBtn';

interface posterSection {
  showDetail: showDetail;
  setShowId: Dispatch<SetStateAction<number>>;
}

const PosterSection = ({ showDetail, setShowId }: posterSection) => {
  return (
    <div className="relative flex flex-col w-full h-64">
      <ShowDetailBackBtn setShowId={setShowId} />
      <FavoriteBtn isLike={showDetail.isLike} id={showDetail.id} />
      <ShowDetailImg imageUrl={showDetail.exhibitionInfoRspDto.imageUrl} />
      <ShowDetailTitle
        realmName={showDetail.exhibitionInfoRspDto.realmName}
        title={showDetail.exhibitionInfoRspDto.title}
        startDate={showDetail.exhibitionInfoRspDto.startDate}
        endDate={showDetail.exhibitionInfoRspDto.endDate}
      />
      <Thermometer temperature={showDetail.temperature} />
    </div>
  );
};

export default PosterSection;
