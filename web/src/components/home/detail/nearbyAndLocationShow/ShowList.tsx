import Show from './Show';

interface showList {
  shows: show[];
}

interface show {
  id: number;
  name: string;
  type: string;
  address: string;
  term: string;
  degree: string;
  favorite: boolean;
  image: string;
}

const ShowList = ({ shows }: showList) => {
  return (
    <div className="flex flex-col">
      {shows.map((show) => (
        <Show
          key={show.id}
          name={show.name}
          type={show.type}
          address={show.address}
          term={show.term}
          degree={show.degree}
          favorite={show.favorite}
          image={show.image}
        />
      ))}
    </div>
  );
};

export default ShowList;