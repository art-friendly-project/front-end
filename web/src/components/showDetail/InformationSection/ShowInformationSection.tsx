import ShowInformationTitle from './ShowInformationTitle';
import ShowInformationContent from './ShowInformationContent';
import RightArrowBtn from 'components/common/RightArrowBtn';

interface showInformationSection {
  showDetail: showDetail;
}

const ShowInformationSection = ({ showDetail }: showInformationSection) => {
  const btnHandler = () => {
    window.open(showDetail.exhibitionInfoRspDto.ticketingUrl);
  };

  return (
    <div className="flex flex-col mt-6">
      <ShowInformationTitle />
      <ShowInformationContent
        realmName={showDetail.exhibitionInfoRspDto.realmName}
        place={showDetail.exhibitionInfoRspDto.place}
        area={showDetail.exhibitionInfoRspDto.area}
        phone={showDetail.exhibitionInfoRspDto.phone}
        url={showDetail.exhibitionInfoRspDto.detailInfoUrl}
      />
      <div className="flex justify-center pb-8 border-b-10 border-gray-10">
        {showDetail.exhibitionInfoRspDto.ticketingUrl === '' ? null : (
          <RightArrowBtn
            name="예매 사이트 바로가기"
            fn={btnHandler}
            style="mt-6"
          />
        )}
      </div>
    </div>
  );
};

export default ShowInformationSection;
