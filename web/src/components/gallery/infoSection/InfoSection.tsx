import RightArrowBtn from 'components/common/RightArrowBtn';
import InfoTitle from './InfoTitle';
import InfoContents from './InfoContents';

interface infoSection {
  sort: string;
  location: string;
  detailLocation: string;
  phone: string;
  link: string;
}

const InfoSection = ({
  sort,
  location,
  detailLocation,
  phone,
  link,
}: infoSection) => {
  const btnHandler = () => {
    window.open(link);
  };

  return (
    <div className="flex flex-col mt-8">
      <InfoTitle />
      <InfoContents
        sort={sort}
        location={location}
        detailLocation={detailLocation}
        phone={phone}
      />
      <div className="flex justify-center pb-8 border-b-10 border-gray-10">
        <RightArrowBtn name="홈페이지 바로가기" fn={btnHandler} style="mt-6" />
      </div>
    </div>
  );
};

export default InfoSection;
