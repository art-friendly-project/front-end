import BtnBasic from 'components/common/BtnBasic';
import LocationList from './LocationList';
import NearbyShowTitle from './NearbyShowTitle';

const NearbyShowSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 mb-6">
      <NearbyShowTitle />
      <BtnBasic name="내 주변" />
      <LocationList />
    </div>
  );
};

export default NearbyShowSection;
