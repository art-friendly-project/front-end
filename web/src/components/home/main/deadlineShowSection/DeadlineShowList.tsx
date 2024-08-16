import ShowItem from 'components/common/ShowItem';
import Loading from './Loading';

interface deadlineShowList {
  endShowData: show[] | undefined;
  isEndShowLoading: boolean;
}

const DeadlineShowList = ({
  endShowData,
  isEndShowLoading,
}: deadlineShowList) => {
  if (isEndShowLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center w-9/10">
      {endShowData?.map((show) => (
        <ShowItem
          key={show.id}
          id={show.id}
          title={show.title}
          area={show.area}
          startDate={show.startDate}
          endDate={show.endDate}
          imageUrl={show.imageUrl}
          temperature={show.temperature}
          isLike={show.isLike}
          posterStyle="w-24 h-32"
          itemStyle="w-full mb-6"
        />
      ))}
    </div>
  );
};

export default DeadlineShowList;
