import BtnBasic from 'components/common/BtnBasic';
import LocationList from './LocationList';

const NearbyShowInfoSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 mb-6">
      <span className="w-full mb-6 pl-7 text-Headline">내 근처 전시/행사</span>
      <BtnBasic name="내 주변" />
      <LocationList />
    </div>
  );
};

export default NearbyShowInfoSection;
