import { useEffect, useState } from 'react';
import FilterList from '../components/home/detail/nearbyAndLocationShow/FilterList';
import ShowList from '../components/home/detail/nearbyAndLocationShow/ShowList';
import FilterSelectModal from '../components/home/detail/nearbyAndLocationShow/FilterSelectModal';
import { nearbyShows } from 'mock/mockData';
import selectModalInfos from 'assets/data/selectModalInfos';
import isApp from 'utils/isApp';
import { useAppSelector } from 'hooks';
import { selectAccessPermissions } from 'store/modules/accessPermissions';
import reverseLocation from 'utils/reverseLocation';

const NearbyAndLocationShow = () => {
  const [isModalOpen, setIsModalOpen] = useState([false, false, false]);
  const [showType, setShowType] = useState('exhibition');
  const [priority, setPriority] = useState('popularity');
  const [location, setLocation] = useState('seoul');

  console.log(location);

  const setState = [setLocation, setShowType, setPriority];

  const openModalIndex = isModalOpen.indexOf(true);

  const locationPermission = useAppSelector(selectAccessPermissions).location;

  useEffect(() => {
    if (isApp()) {
      if (locationPermission === 'granted') {
        window.ReactNativeWebView?.postMessage(
          JSON.stringify({ type: 'GEOLOCATION' }),
        );

        const geolocation = (e: MessageEvent<string>) => {
          const data: {
            geolocation: {
              longitude: number;
              latitude: number;
            };
          } = JSON.parse(e.data);
          console.log(JSON.parse(e.data));
          if (data.geolocation !== undefined) {
            void reverseLocation(data.geolocation, setLocation);
          }
        };

        document.addEventListener('message', geolocation);

        return () => {
          document.removeEventListener('message', geolocation);
        };
      }
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      {isModalOpen.includes(true) ? (
        <FilterSelectModal
          title1={selectModalInfos[openModalIndex].title1}
          title2={selectModalInfos[openModalIndex].title2}
          selects={selectModalInfos[openModalIndex].selects}
          setState={setState[openModalIndex]}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
      <FilterList
        location={location}
        priority={priority}
        showType={showType}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <ShowList nearbyShows={nearbyShows} />
    </div>
  );
};

export default NearbyAndLocationShow;
