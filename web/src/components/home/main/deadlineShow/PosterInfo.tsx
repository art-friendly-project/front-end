interface posterInfo {
  sort: string;
  name: string;
  address: string;
  term: string;
}

const PosterInfo = ({ sort, name, address, term }: posterInfo) => {
  return (
    <div className="flex flex-col items-start justify-center h-32 ml-4">
      <span className="text-Body1-M">{sort}</span>
      <span className="text-Body3">{name}</span>
      <span className="text-Body2-M text-gray-80">{address}</span>
      <span className="mt-2 text-Body2-M">{term}</span>
    </div>
  );
};

export default PosterInfo;
