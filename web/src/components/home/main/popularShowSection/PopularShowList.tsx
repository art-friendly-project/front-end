import PopularShow from './PopularShow';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import api from 'api';

interface popularShowList {
  setShowId: Dispatch<SetStateAction<number>>;
}

const PopularShowList = ({ setShowId }: popularShowList) => {
  const [loading, setLoading] = useState(false);
  const [shows, setShows] = useState<popularShow[]>([
    {
      exhibitionId: 1,
      rank: 0,
      title: '',
      imageUrl: '',
      rankShift: '',
      startDate: '',
      endDate: '',
      place: '',
      area: '',
    },
    {
      exhibitionId: 2,
      rank: 0,
      title: '',
      imageUrl: '',
      rankShift: '',
      startDate: '',
      endDate: '',
      place: '',
      area: '',
    },
    {
      exhibitionId: 3,
      rank: 0,
      title: '',
      imageUrl: '',
      rankShift: '',
      startDate: '',
      endDate: '',
      place: '',
      area: '',
    },
  ]);

  const fetchShows = async () => {
    try {
      const result: fetchPopularShow = await api.get(
        '/exhibitions//lists/popular',
      );
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
            loading={loading}
            setShowId={setShowId}
          />
        ))}
    </div>
  );
};

export default PopularShowList;
