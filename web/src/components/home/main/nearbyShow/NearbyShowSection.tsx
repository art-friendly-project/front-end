import BtnBasic from 'components/common/BtnBasic';
import LocationList from './LocationList';
import NearbyShowTitle from './NearbyShowTitle';
import { useNavigate } from 'react-router-dom';

const NearbyShowSection = () => {
  const navigate = useNavigate();

  const BtnHandler = () => {
    navigate('nearby');
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-6">
      <NearbyShowTitle />
      <BtnBasic name="내 주변" fn={BtnHandler} />
      <LocationList />
    </div>
  );
};

export default NearbyShowSection;
