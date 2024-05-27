interface showInformationContent {
  realmName: string;
  place: string;
  area: string;
  phone: string;
}

const ShowInformationContent = ({
  realmName,
  place,
  area,
  phone,
}: showInformationContent) => {
  return (
    <div className="flex pl-[5%] mt-6">
      <div className="flex flex-col w-24 text-Body2-M text-gray-90">
        <span>전시 종류</span>
        <span className="mt-3">장소</span>
        <span className="mt-3">전시 지역</span>
        <span className="mt-3">전시 문의</span>
      </div>
      <div className="flex flex-col text-Body2-M text-gray-110">
        <span>{realmName}</span>
        <span className="mt-3">{place}</span>
        <span className="mt-3">{area}</span>
        <span className="mt-3">{phone}</span>
      </div>
    </div>
  );
};

export default ShowInformationContent;
