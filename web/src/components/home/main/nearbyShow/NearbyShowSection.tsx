import BtnBasic from 'components/common/BtnBasic';
import LocationList from './LocationList';
import NearbyShowTitle from './NearbyShowTitle';
import { useNavigate } from 'react-router-dom';
import useGeolocation from 'hooks/useGeolocation';
import isApp from 'utils/isApp';
import useReverseLocation from 'hooks/useReverseLocation';
import { useEffect } from 'react';

const NearbyShowSection = () => {
  const navigate = useNavigate();
  const { geolocation, geolocationAccess } = useGeolocation();
  useReverseLocation(geolocation);

  useEffect(() => {
    if (isApp()) {
      window.ReactNativeWebView?.postMessage(
        JSON.stringify({ type: 'LOCATION_PERMISSION' }),
      );
    }
  }, []);

  const BtnHandler = () => {
    if (!geolocationAccess) {
      if (!isApp()) {
        alert(
          '위치 액세스 권한이 필요합니다.\n권한 설정 후 새로고침 해주시기 바랍니다.\n\n동의하셨을 경우 위치 정보를 받아오는 데 시간이 잠시 걸릴 수 있으니\n잠시 후 다시 시도해 주시기 바랍니다.',
        );
        return;
      }

      if (isApp()) {
        window.ReactNativeWebView?.postMessage(
          JSON.stringify({ type: 'LOCATION_PERMISSION_RETRY' }),
        );
        return;
      }
    }

    navigate('/home/nearby');
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
