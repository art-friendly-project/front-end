import PopularShow from './PopularShow';
import api from 'api';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

const PopularShowList = () => {
  const getPopularShows = async () => {
    const res = await api.get('/exhibitions/lists/popular');
    return res.data.data;
  };

  const { data, isLoading } = useQuery<popularShow[]>({
    queryKey: ['shows', 'popular'],
    queryFn: getPopularShows,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center w-full">
      {data
        ?.filter((_, i) => i <= 2)
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
