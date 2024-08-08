import DeadlineShow from './DeadlineShow';
import Loading from './Loading';
import { useGetEndShows } from 'hooks/query/useGetEndShows';

const DeadlineShowList = () => {
  const { data, isLoading } = useGetEndShows();

  if (isLoading) {
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
