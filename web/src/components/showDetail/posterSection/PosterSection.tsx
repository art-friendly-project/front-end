import ShowDetailBackBtn from './ShowDetailBackBtn';
import ShowDetailImg from './ShowDetailImg';
import ShowDetailTitle from './ShowDetailTitle';
import Thermometer from './Thermometer';
import FavoriteBtn from 'components/showDetail/posterSection/FavoriteBtn';

interface posterSection {
  showDetail: showDetail;
}

const PosterSection = ({ showDetail }: posterSection) => {
  return (
    <div className="relative flex flex-col w-full h-64">
      <ShowDetailBackBtn />
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
