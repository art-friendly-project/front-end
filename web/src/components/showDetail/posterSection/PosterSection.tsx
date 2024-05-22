import ShowDetailBackBtn from './ShowDetailBackBtn';
import ShowDetailImg from './ShowDetailImg';
import ShowDetailTitle from './ShowDetailTitle';
import Thermometer from './Thermometer';
import FavoriteAndShareBtn from 'components/showDetail/posterSection/FavoriteAndShareBtn';

interface posterSection {
  showDetail: showDetail;
}

const PosterSection = ({ showDetail }: posterSection) => {
  return (
    <>
      <ShowDetailBackBtn />
      <FavoriteAndShareBtn isLike={showDetail.isLike} />
      <ShowDetailImg imageUrl={showDetail.exhibitionInfoRspDto.imageUrl} />
      <ShowDetailTitle
        realmName={showDetail.exhibitionInfoRspDto.realmName}
        title={showDetail.exhibitionInfoRspDto.title}
        startDate={showDetail.exhibitionInfoRspDto.startDate}
        endDate={showDetail.exhibitionInfoRspDto.endDate}
      />
      <Thermometer temperature={showDetail.temperature} />
    </>
  );
};

export default PosterSection;
