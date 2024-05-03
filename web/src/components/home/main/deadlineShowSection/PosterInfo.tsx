interface posterInfo {
  showType: string;
  name: string;
  location: string;
  term: string;
}

const PosterInfo = ({ showType, name, location, term }: posterInfo) => {
  return (
    <div className="flex flex-col items-start justify-center h-32 ml-4">
      <span className="text-Body1-M">{showType}</span>
      <span className="text-Body3">{name}</span>
      <span className="text-Body2-M text-gray-80">{location}</span>
      <span className="mt-2 text-Body2-M">{term}</span>
    </div>
  );
};

export default PosterInfo;
