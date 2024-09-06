import InfoContentsBody from './InfoContentsBody';
import InfoContentsTitle from './InfoContentsTitle';

interface infoContents {
  sort: string;
  location: string;
  detailLocation: string;
  phone: string;
}

const InfoContents = ({
  sort,
  location,
  detailLocation,
  phone,
}: infoContents) => {
  return (
    <div className="flex pl-[5%] mt-4">
      <InfoContentsTitle />
      <InfoContentsBody
        sort={sort}
        location={location}
        detailLocation={detailLocation}
        phone={phone}
      />
    </div>
  );
};

export default InfoContents;
