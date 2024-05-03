interface posterInfo {
  type: string;
  name: string;
  address: string;
  term: string;
}

const PosterInfo = ({ type, name, address, term }: posterInfo) => {
  return (
    <div className="flex flex-col items-start justify-center h-32 ml-6">
      <span className="text-Body1-M">{type}</span>
      <span className="text-Body3">{name}</span>
      <span className="text-Body2-M text-gray-80">{address}</span>
      <span className="mt-4 text-Body2-M">{term}</span>
    </div>
  );
};

export default PosterInfo;
