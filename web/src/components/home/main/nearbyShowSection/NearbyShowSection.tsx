import BtnBasic from 'components/common/BtnBasic';
import LocationList from './LocationList';
import NearbyShowTitle from './NearbyShowTitle';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { selectAccessPermissions } from 'store/modules/accessPermissions';
import isApp from 'utils/isApp';

const NearbyShowSection = () => {
  const lcationPermission = useAppSelector(selectAccessPermissions).location;
  const navigate = useNavigate();

  const BtnHandler = () => {
    if (isApp()) {
      if (lcationPermission !== 'granted') {
        window.ReactNativeWebView?.postMessage(
          JSON.stringify({ type: 'LOCATION_PERMISSION' }),
        );

        return;
      }
      navigate('/home/nearby');
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
