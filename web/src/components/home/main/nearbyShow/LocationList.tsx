import LocationIconBtn from './locationIconBtn';

import seoul from '../../../../assets/images/location/seoul.svg';
import gyeonggiIncheon from '../../../../assets/images/location/gyeonggi-incheon.svg';
import gangwon from '../../../../assets/images/location/gangwon.svg';
import gyeongnamBusan from '../../../../assets/images/location/gyeongnam-busan.svg';
import gyeongbukDaegu from '../../../../assets/images/location/gyeongbuk-daegu.svg';
import chungcheongDaejeon from '../../../../assets/images/location/chungcheong-daejeon.svg';
import jeollaGwangju from '../../../../assets/images/location/jeolla-gwangju.svg';
import jeju from '../../../../assets/images/location/jeju.svg';

const LocationList = () => {
  return (
    <div className="flex flex-wrap w-full">
      {locationIcons.map((locationIcon, idx) => (
        <LocationIconBtn
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
  '강원',
  '경남/부산',
  '경북/대구',
  '충청/대전',
  '전라/광주',
  '제주',
];

export default LocationList;
