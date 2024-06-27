import DeadlineShow from './DeadlineShow';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import api from 'api';

interface deadlineShowList {
  setShowId: Dispatch<SetStateAction<number>>;
}

const DeadlineShowList = ({ setShowId }: deadlineShowList) => {
  const [loading, setLoading] = useState(false);
  const [shows, setShows] = useState<show[]>([
    {
      id: 1,
      title: '',
      area: '',
      temperature: 0,
      startDate: '',
      endDate: '',
      imageUrl: '',
      isLike: false,
    },
    {
      id: 2,
      title: '',
      area: '',
      temperature: 0,
      startDate: '',
      endDate: '',
      imageUrl: '',
      isLike: false,
    },
    {
      id: 3,
      title: '',
      area: '',
      temperature: 0,
      startDate: '',
      endDate: '',
      imageUrl: '',
      isLike: false,
    },
  ]);

  const fetchShows = async () => {
    try {
      const result: fetchEndShow = await api.get('/exhibitions/lists/end');
      setLoading(true);
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
          imageUrl={show.imageUrl}
          temperature={show.temperature}
          isLike={show.isLike}
          loading={loading}
          setShowId={setShowId}
        />
      ))}
    </div>
  );
};

export default DeadlineShowList;
