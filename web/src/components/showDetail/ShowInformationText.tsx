interface showInformationText {
  showType: string;
  place: string;
  location: string;
  phone: string;
}

const ShowInformationText = ({
  showType,
  place,
  location,
  phone,
}: showInformationText) => {
  return (
    <div className="flex pl-6 mt-6">
      <div className="flex flex-col w-24 text-Body2-M text-gray-90">
        <span>전시 종류</span>
        <span className="mt-3">장소</span>
        <span className="mt-3">전시 주소</span>
        <span className="mt-3">전시 문의</span>
      </div>
      <div className="flex flex-col text-Body2-M text-gray-110">
        <span>{showType}</span>
        <span className="mt-3">{place}</span>
        <span className="mt-3">{location}</span>
        <span className="mt-3">{phone}</span>
      </div>
    </div>
  );
};

export default ShowInformationText;
