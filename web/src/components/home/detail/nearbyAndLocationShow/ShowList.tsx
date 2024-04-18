import Show from './Show';
import ShowEmptyMessage from './ShowEmptyMessage';

interface showList {
  nearbyShows: nearbyShow[];
}

interface nearbyShow {
  id: number;
  name: string;
  type: string;
  address: string;
  term: string;
  temperature: string;
  favorite: boolean;
  image: string;
}

const ShowList = ({ nearbyShows }: showList) => {
  return (
    <div className="flex flex-col">
      {nearbyShows.length === 0 ? (
        <ShowEmptyMessage />
      ) : (
        nearbyShows.map((show) => (
          <Show
            id={show.id}
            key={show.id}
            name={show.name}
            type={show.type}
            address={show.address}
            term={show.term}
            temperature={show.temperature}
            favorite={show.favorite}
            image={show.image}
          />
        ))
      )}
    </div>
  );
};

export default ShowList;
