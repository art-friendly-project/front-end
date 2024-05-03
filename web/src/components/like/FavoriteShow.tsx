import { useNavigate } from 'react-router-dom';
import PosterImg from 'components/common/PosterImg';
import ShowInfo from './ShowInfo';
import FavoriteBtn from 'components/common/FavoriteBtn';
import AddScheduleBtn from './AddScheduleBtn';
import { type Dispatch, type SetStateAction } from 'react';
import calculateRemainDay from 'utils/calculateRemainDay';

interface favoriteShow {
  id: number;
  name: string;
  term: string;
  image: string;
  favorite: boolean;
  location: string;
  setCalendars: Dispatch<SetStateAction<calendar[]>>;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setDeadline: Dispatch<SetStateAction<string>>;
  setScheduleName: Dispatch<SetStateAction<string>>;
  setLocation: Dispatch<SetStateAction<string>>;
}

const FavoriteShow = ({
  id,
  name,
  term,
  image,
  favorite,
  location,
  setCalendars,
  setIsModal,
  setDeadline,
  setScheduleName,
  setLocation,
}: favoriteShow) => {
  const navigate = useNavigate();

  const remainDay = calculateRemainDay(term);

  return (
    <div className="relative">
      <button
        className="flex w-full mb-6 rounded-lg active:bg-gray-00"
        onClick={() => {
          navigate(`/shows/${id}`);
        }}
      >
        <PosterImg
          width="w-24"
          height="h-28"
          bgColor="bg-gray-100"
          image={image}
        />
        <ShowInfo name={name} term={term} />
      </button>
      <FavoriteBtn favorite={favorite} />
      {remainDay < 0 ? null : (
        <AddScheduleBtn
          setCalendars={setCalendars}
          setIsModal={setIsModal}
          name={name}
          term={term}
          setDeadline={setDeadline}
          setScheduleName={setScheduleName}
          setLocation={setLocation}
          location={location}
        />
      )}
    </div>
  );
};

export default FavoriteShow;
