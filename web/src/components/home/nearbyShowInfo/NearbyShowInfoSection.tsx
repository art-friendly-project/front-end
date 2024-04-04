import BtnBasic from 'components/common/BtnBasic';
import LocationList from './LocationList';

const NearbyShowInfoSection = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <span className="w-full pl-6 my-6 text-Headline">내 근처 전시/행사</span>
      <BtnBasic name="내 주변" />
      <LocationList />
    </div>
  );
};

export default NearbyShowInfoSection;
