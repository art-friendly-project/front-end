import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { locationActions } from 'store/modules/location';

interface locationIconBtn {
  locationIcon: string;
  locationKr: string;
}

const LocationIconBtn = ({ locationIcon, locationKr }: locationIconBtn) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const locationBtnHandler = () => {
    dispatch(locationActions.setLocation(locationKr));
    navigate('/home/nearby');
  };

  return (
    <div className="flex items-center justify-center w-1/4 mt-4">
      <button onClick={locationBtnHandler}>
        <img src={locationIcon} className="w-16 h-16" />
        <span className="text-Body2-M">{locationKr}</span>
      </button>
    </div>
  );
};

export default LocationIconBtn;
