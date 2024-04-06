import BtnBasic from 'components/common/BtnBasic';
import LocationList from './LocationList';
import NearbyShowInfoTitle from './NearbyShowInfoTitle';

const NearbyShowInfoSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 mb-6">
      <NearbyShowInfoTitle />
      <BtnBasic name="내 주변" />
      <LocationList />
    </div>
  );
};

export default NearbyShowInfoSection;
