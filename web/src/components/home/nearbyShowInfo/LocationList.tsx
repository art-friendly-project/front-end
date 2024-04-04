import LocationBtn from './LocationBtn';

import seoul from '../../../assets/location/seoul.svg';
import gyeonggiIncheon from '../../../assets/location/gyeonggi-incheon.svg';
import gangwon from '../../../assets/location/gangwon.svg';
import gyeongnamBusan from '../../../assets/location/gyeongnam-busan.svg';
import gyeongbukDaegu from '../../../assets/location/gyeongbuk-daegu.svg';
import chungcheongDaejeon from '../../../assets/location/chungcheong-daejeon.svg';
import jeollaGwangju from '../../../assets/location/jeolla-gwangju.svg';
import jeju from '../../../assets/location/jeju.svg';

const LocationList = () => {
  return (
    <div className="flex flex-wrap w-full">
      {locationIcons.map((locationIcon, idx) => (
        <LocationBtn
          key={locationIcon}
          locationIcon={locationIcon}
          locationKr={locationsKr[idx]}
        />
      ))}
    </div>
  );
};

const locationIcons = [
  seoul,
  gyeonggiIncheon,
  gangwon,
  gyeongnamBusan,
  gyeongbukDaegu,
  chungcheongDaejeon,
  jeollaGwangju,
  jeju,
];

const locationsKr = [
  '서울',
  '경기/인천',
  '강원도',
  '경남/부산',
  '경북/대구',
  '충청/대전',
  '전라/광주',
  '제주',
];

export default LocationList;
