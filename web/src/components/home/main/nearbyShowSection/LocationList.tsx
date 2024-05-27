import { locationIcons, locations } from 'assets/data/location';
import LocationIconBtn from './locationIconBtn';

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

export default LocationList;
