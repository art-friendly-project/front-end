interface suggestTasteShow {
  name: string;
  term: string;
  location: string;
  image: string;
}

const SuggestTasteShow = ({
  name,
  term,
  location,
  image,
}: suggestTasteShow) => {
  return (
    <button className="relative inline-block mr-10">
      <img
        src={image}
        className="w-64 bg-gray-200 object-fit h-80 rounded-xl"
      />
      <div className="absolute flex flex-col items-start left-2">
        <span className="mt-3 text-Subhead">{name}</span>
        <span className="mt-1 text-Body3-M text-gray-80">{term}</span>
        <span className="mt-1 text-Body3-M">{location}</span>
      </div>
    </button>
  );
};

export default SuggestTasteShow;
