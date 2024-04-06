interface posterInfo {
  name: string;
  term: string;
  location: string;
}

const PosterInfo = ({ name, term, location }: posterInfo) => {
  return (
    <div className="absolute flex flex-col items-start left-2">
      <span className="mt-3 text-Subhead">{name}</span>
      <span className="mt-1 text-Body3-M text-gray-80">{term}</span>
      <span className="mt-1 text-Body3-M">{location}</span>
    </div>
  );
};

export default PosterInfo;
