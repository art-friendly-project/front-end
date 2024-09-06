interface infoContentsBody {
  sort: string;
  location: string;
  detailLocation: string;
  phone: string;
}

const InfoContentsBody = ({
  sort,
  location,
  detailLocation,
  phone,
}: infoContentsBody) => {
  return (
    <div className="flex flex-col text-Body2-M text-gray-110">
      <span>{sort}</span>
      <span className="mt-2">{location}</span>
      <span className="mt-2">{detailLocation}</span>
      <span className="mt-2">{phone}</span>
    </div>
  );
};

export default InfoContentsBody;
