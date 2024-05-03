import LocationIconBtn from './locationIconBtn';

import seoul from 'assets/images/location/seoul.svg';
import gyeonggiIncheon from 'assets/images/location/gyeonggi-incheon.svg';
import gangwon from 'assets/images/location/gangwon.svg';
import gyeongnamBusan from 'assets/images/location/gyeongnam-busan.svg';
import gyeongbukDaegu from 'assets/images/location/gyeongbuk-daegu.svg';
import chungcheongDaejeon from 'assets/images/location/chungcheong-daejeon.svg';
import jeollaGwangju from 'assets/images/location/jeolla-gwangju.svg';
import jeju from 'assets/images/location/jeju.svg';

const LocationList = () => {
  return (
    <div className="flex flex-wrap w-full">
      {locationIcons.map((locationIcon, idx) => (
        <LocationIconBtn
          key={locationIcon}
          locationIcon={locationIcon}
          location={locations[idx]}
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

const locations = [
  ['seoul', '서울'],
  ['gyeonggi-incheon', '경기/인천'],
  ['gangwon', '강원'],
  ['gyeongnam-busan', '경남/부산'],
  ['gyeongbuk-daegu', '경북/대구'],
  ['chungcheong-daejeon', '충청/대전'],
  ['jeolla-gwangju', '전라/광주'],
  ['jeju', '제주'],
];

export default LocationList;
