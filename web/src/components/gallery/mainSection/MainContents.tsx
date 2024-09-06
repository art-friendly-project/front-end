interface title {
  imgUrl: string;
  name: string;
  location: string;
}

const Title = ({ imgUrl, name, location }: title) => {
  return (
    <div className="flex items-center">
      <img src={imgUrl} className="rounded-full w-14 h-14 bg-gray-10" />
      <div className="flex flex-col ml-4">
        <span className="text-Subhead">{name}</span>
        <span className="mt-1 text-gray-80 text-Body2">{location}</span>
      </div>
    </div>
  );
};

export default Title;
