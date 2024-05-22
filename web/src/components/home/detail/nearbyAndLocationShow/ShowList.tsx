import Show from './Show';
import ShowEmptyMessage from './ShowEmptyMessage';

interface showList {
  shows: show[];
}

const ShowList = ({ shows }: showList) => {
  return (
    <div className="flex flex-col items-center mt-20">
      {shows.length === 0 ? (
        <ShowEmptyMessage />
      ) : (
        shows.map((show) => (
          <Show
            id={show.id}
            key={show.id}
            title={show.title}
            area={show.area}
            startDate={show.startDate}
            endDate={show.endDate}
            temperature={show.temperature}
            isLike={show.isLike}
            imageUrl={show.imageUrl}
          />
        ))
      )}
    </div>
  );
};

export default ShowList;
