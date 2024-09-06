import { useNavigate } from 'react-router-dom';

interface galleryList {
  id: number;
  imgUrl: string;
  name: string;
  location: string;
  firstLocation: string;
  secondLocation: string;
}

export default function GalleryList({
  id,
  imgUrl,
  name,
  location,
  firstLocation,
  secondLocation,
}: galleryList) {
  const navigate = useNavigate();
  return (
    <button
      className="pl-[5%] mb-6 flex items-center"
      onClick={() => {
        navigate(`${id}?f=${firstLocation}&s=${secondLocation}`);
      }}
    >
      <img
        src={imgUrl}
        className="w-20 h-20 border rounded-full border-gray-10"
      />
      <div className="flex flex-col items-start w-full ml-4">
        <span className="text-Body3">{name}</span>
        <span className="text-Body2-M text-gray-80">{location}</span>
      </div>
    </button>
  );
}
