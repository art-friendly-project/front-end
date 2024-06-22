import ShowInformationContentTitle from './ShowInformationContentTitle';
import ShowInformationContentBody from './ShowInformationContentBody';

interface showInformationContent {
  realmName: string;
  place: string;
  area: string;
  phone: string;
  url: string;
}

const ShowInformationContent = ({
  realmName,
  place,
  area,
  phone,
  url,
}: showInformationContent) => {
  return (
    <div className="flex pl-[5%] mt-4">
      <ShowInformationContentTitle />
      <ShowInformationContentBody
        realmName={realmName}
        place={place}
        area={area}
        phone={phone}
        url={url}
      />
    </div>
  );
};

export default ShowInformationContent;
