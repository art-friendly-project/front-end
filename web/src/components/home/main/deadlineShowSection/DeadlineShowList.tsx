import DeadlineShow from './DeadlineShow';
import api from 'api';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

const DeadlineShowList = () => {
  const getEndShows = async () => {
    const res = await api.get('/exhibitions/lists/end');
    return res.data.data;
  };

  const { data, isLoading } = useQuery<show[]>({
    queryKey: ['shows', 'end'],
    queryFn: getEndShows,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading || data === undefined) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center w-9/10">
      {data.map((show) => (
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
        />
      ))}
    </div>
  );
};

export default DeadlineShowList;
