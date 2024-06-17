import { IoIosArrowForward } from 'react-icons/io';

interface showInformationContentBody {
  realmName: string;
  place: string;
  area: string;
  phone: string;
  url: string;
}

const ShowInformationContentBody = ({
  realmName,
  place,
  area,
  phone,
  url,
}: showInformationContentBody) => {
  const urlBtnHandler = () => {
    window.open(url);
  };

  return (
    <div className="flex flex-col text-Body2-M text-gray-110">
      <span>{realmName}</span>
      <span className="mt-3">{place}</span>
      <span className="mt-3">{area}</span>
      <span className="mt-3">{phone}</span>
      <button className="flex items-center mt-3" onClick={urlBtnHandler}>
        <span className="underline">홈페이지 이동</span>
        <IoIosArrowForward className="ml-1 text-Body3" />
      </button>
    </div>
  );
};

export default ShowInformationContentBody;
