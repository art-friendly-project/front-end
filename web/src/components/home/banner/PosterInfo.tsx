interface posterInfo {
  term: string;
  name: string;
  place: string;
  location: string;
}

const PosterInfo = ({ term, name, place, location }: posterInfo) => {
  return (
    <button className="absolute z-20 flex flex-col ml-4 text-white bottom-6">
      <span className="text-Body2-M">{term}</span>
      <span className="text-Display2">{name}</span>
      <span className="mt-2 text-Subhead">{`${place} / ${location}`}</span>
    </button>
  );
};

export default PosterInfo;
