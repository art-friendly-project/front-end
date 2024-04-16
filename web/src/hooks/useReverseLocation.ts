import axios from 'axios';
import { useAppDispatch } from 'hooks';
import { useEffect } from 'react';
import { locationActions } from 'store/modules/location';
import {
  translateLocationEngToKor,
  translateLocationKorToEng,
} from 'utils/translateLocation';

interface reverseLocation {
  longitude: number;
  latitude: number;
}

const useReverseLocation = (geolocation: reverseLocation) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const locationRequest = async () => {
      try {
        const result = await axios.get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${geolocation.longitude}&y=${geolocation.latitude}`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`,
            },
          },
        );
        const region = translateLocationKorToEng(
          result?.data?.documents[0]?.address?.region_1depth_name as string,
        );
        const locationKor = translateLocationEngToKor(region);
        dispatch(locationActions.setLocation(locationKor));
      } catch (err) {
        console.error(err);
      }
    };

    void locationRequest();
  }, [geolocation]);
};

export default useReverseLocation;
