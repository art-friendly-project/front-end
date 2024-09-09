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
      <div className="flex items-center justify-center w-18 h-18 bg-white border rounded-full pr-0.5 pb-1 border-gray-20">
        <img src={imgUrl} className="w-12 h-12" />
      </div>
      <div className="flex flex-col items-start ml-4">
        <span className="text-Body3">{name}</span>
        <span className="text-Body2-M text-gray-80">{location}</span>
      </div>
    </button>
  );
}
