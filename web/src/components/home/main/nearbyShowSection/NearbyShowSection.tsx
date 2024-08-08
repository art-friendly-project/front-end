import LocationList from './LocationList';
import NearbyShowTitle from './NearbyShowTitle';

const NearbyShowSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 mb-6">
      <NearbyShowTitle />
      <LocationList />
    </div>
  );
};

export default NearbyShowSection;
