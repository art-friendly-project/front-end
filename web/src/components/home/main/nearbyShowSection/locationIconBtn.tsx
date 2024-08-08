import { useAppDispatch } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { showsLocationActions } from 'store/modules/showsLocation';

interface locationIconBtn {
  locationIcon: string;
  location: string;
}

const LocationIconBtn = ({ locationIcon, location }: locationIconBtn) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const locationBtnHandler = () => {
    dispatch(showsLocationActions.current(location));
    navigate('/home/nearby');
  };

  return (
    <div className="flex items-center justify-center w-1/4 mt-4 rounded-lg active:bg-gray-00">
      <button onClick={locationBtnHandler}>
        <img src={locationIcon} className="w-14 h-14" />
        <span className="text-Body2-M">{location}</span>
      </button>
    </div>
  );
};

export default LocationIconBtn;
