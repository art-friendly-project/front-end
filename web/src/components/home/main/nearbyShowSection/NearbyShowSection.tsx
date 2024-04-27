import BtnBasic from 'components/common/BtnBasic';
import LocationList from './LocationList';
import NearbyShowTitle from './NearbyShowTitle';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectAccessPermissions } from 'store/modules/accessPermissions';
import isApp from 'utils/isApp';
import { isNearbyActions } from 'store/modules/isNearby';

const NearbyShowSection = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const locationPermission = useAppSelector(selectAccessPermissions).location;

  const BtnHandler = () => {
    if (isApp()) {
      if (locationPermission !== 'granted') {
        window.ReactNativeWebView?.postMessage(
          JSON.stringify({ type: 'LOCATION_PERMISSION' }),
        );

        return;
      }

      if (locationPermission === 'granted') {
        dispatch(isNearbyActions.current(true));
        navigate('/home/nearby');
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-6">
      <NearbyShowTitle />
      <BtnBasic name="내 주변" fn={BtnHandler} disable={false} />
      <LocationList />
    </div>
  );
};

export default NearbyShowSection;
