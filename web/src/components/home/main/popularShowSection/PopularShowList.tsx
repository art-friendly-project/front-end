import PopularShow from './PopularShow';
import Loading from './Loading';

interface popularShowList {
  popularShowData: popularShow[] | undefined;
  isPopularShowLoading: boolean;
}

const PopularShowList = ({
  popularShowData,
  isPopularShowLoading,
}: popularShowList) => {
  if (isPopularShowLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center w-full">
      {popularShowData
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
