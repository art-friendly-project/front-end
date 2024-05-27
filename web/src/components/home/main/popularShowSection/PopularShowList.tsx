import PopularShow from './PopularShow';
import { useEffect, useState } from 'react';
import api from 'api';

const PopularShowList = () => {
  const [shows, setShows] = useState<popularShow[]>([]);

  const fetchShows = async () => {
    try {
      const result: fetchPopularShow = await api.get(
        '/exhibitions//lists/popular',
      );

      setShows(result.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchShows();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {shows
        .filter((_, i) => i <= 2)
        .map((show, idx) => (
          <PopularShow
            key={show.exhibitionId}
            idx={idx}
            id={show.exhibitionId}
            title={show.title}
            imageUrl={show.imageUrl}
            rankShift={show.rankShift}
          />
        ))}
    </div>
  );
};

export default PopularShowList;
