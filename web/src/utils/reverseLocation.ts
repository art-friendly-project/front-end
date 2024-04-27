import axios from 'axios';
import { type Dispatch, type SetStateAction } from 'react';
import { translateLocationKorToEng } from 'utils/translateLocation';

const reverseLocation = async (
  geolocation: {
    longitude: number;
    latitude: number;
  },
  setLocation: Dispatch<SetStateAction<string>>,
) => {
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

    setLocation(region);
  } catch (err) {
    console.error(err);
  }
};

export default reverseLocation;
