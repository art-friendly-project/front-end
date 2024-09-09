interface title {
  imgUrl: string;
  name: string;
  location: string;
}

const Title = ({ imgUrl, name, location }: title) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center w-14 h-14 pb-1 pr-0.5 bg-white rounded-full">
        <img src={imgUrl} className="w-10 h-10" />
      </div>
      <div className="flex flex-col ml-4">
        <span className="text-white text-Subhead">{name}</span>
        <span className="mt-0.5 text-gray-40 text-Body2">{location}</span>
      </div>
    </div>
  );
};

export default Title;
