import BtnAndRightArrow from 'components/common/BtnAndRightArrow';
import ShowInformationTitle from './ShowInformationTitle';
import ShowInformationContent from './ShowInformationContent';

interface showInformationSection {
  showDetail: showDetail;
}

const ShowInformationSection = ({ showDetail }: showInformationSection) => {
  const btnHandler = () => {
    window.open(showDetail.exhibitionInfoRspDto.ticketingUrl);
  };

  return (
    <div className="flex flex-col mt-72">
      <ShowInformationTitle />
      <ShowInformationContent
        realmName={showDetail.exhibitionInfoRspDto.realmName}
        place={showDetail.exhibitionInfoRspDto.place}
        area={showDetail.exhibitionInfoRspDto.area}
        phone={showDetail.exhibitionInfoRspDto.phone}
      />
      <div className="flex justify-center pb-10 mt-6 border-b-10 border-gray-10">
        {showDetail.exhibitionInfoRspDto.ticketingUrl === '' ? null : (
          <BtnAndRightArrow
            name="예매 사이트 바로가기"
            disable={false}
            fn={btnHandler}
          />
        )}
      </div>
    </div>
  );
};

export default ShowInformationSection;
