import { useAppDispatch } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { isNearbyActions } from 'store/modules/isNearby';
import { locationActions } from 'store/modules/location';

interface locationIconBtn {
  locationIcon: string;
  location: string[];
}

const LocationIconBtn = ({ locationIcon, location }: locationIconBtn) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const locationBtnHandler = () => {
    dispatch(isNearbyActions.current(false));
    dispatch(locationActions.current(location[0]));
    navigate('/home/nearby');
  };

  return (
    <div className="flex items-center justify-center w-1/4 mt-4 rounded-lg active:bg-gray-00">
      <button onClick={locationBtnHandler}>
        <img src={locationIcon} className="w-16 h-16" />
        <span className="text-Body2-M">{location[1]}</span>
      </button>
    </div>
  );
};

export default LocationIconBtn;
