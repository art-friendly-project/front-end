import PopularShow from './PopularShow';
import Loading from './Loading';
import { useGetPopularShows } from 'hooks/query/useGetPopularShows';

const PopularShowList = () => {
  const { data, isLoading } = useGetPopularShows();

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
