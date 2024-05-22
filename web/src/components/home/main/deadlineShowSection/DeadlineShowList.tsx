import DeadlineShow from './DeadlineShow';
import { useEffect, useState } from 'react';
import api from 'api';

const DeadlineShowList = () => {
  const [shows, setShows] = useState<show[]>([]);

  const fetchShows = async () => {
    try {
      const result: fetchEndShow = await api.get('/exhibitions/lists/end');

      setShows(result.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchShows();
  }, []);

  return (
    <div className="flex flex-col items-center w-9/10">
      {shows.map((show) => (
        <DeadlineShow
          key={show.id}
          id={show.id}
          title={show.title}
          area={show.area}
          startDate={show.startDate}
          endDate={show.endDate}
          imageUrl=""
          temperature={show.temperature}
          isLike={show.isLike}
        />
      ))}
    </div>
  );
};

export default DeadlineShowList;
