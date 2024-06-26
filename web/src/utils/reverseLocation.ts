import axios from 'axios';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectIsNearby } from 'store/modules/isNearby';
import { showsLocationActions } from 'store/modules/showsLocation';
import { changeLocation } from 'utils/translateLocation';

const reverseLocation = async (geolocation: {
  longitude: number;
  latitude: number;
}) => {
  const dispatch = useAppDispatch();
  const isNearby = useAppSelector(selectIsNearby);

  if (isNearby) {
    try {
      const result = await axios.get(
        `/v2/local/geo/coord2address.json?x=${geolocation.longitude}&y=${geolocation.latitude}`,
        {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
          },
        },
      );

      const address: string =
        result?.data?.documents[0]?.address?.region_1depth_name;
      const region = changeLocation(address);

      dispatch(showsLocationActions.current(region));
    } catch (err) {
      console.error(err);
    }
  }
};

export default reverseLocation;
