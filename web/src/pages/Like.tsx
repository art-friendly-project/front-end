import FavoriteShow from 'components/like/FavoriteShow';
import { likeList } from 'mock/mockData';
import { useEffect, useState } from 'react';

const Like = () => {
  const [shows, setShows] = useState<favoriteShow[]>([]);

  useEffect(() => {
    setShows(likeList);
  }, [likeList]);

  return (
    <div className="flex flex-col px-[5%]">
      {shows.map((show) => (
        <FavoriteShow
          key={show.id}
          id={show.id}
          name={show.name}
          term={show.term}
          image={show.image}
          favorite={show.favorite}
        />
      ))}
    </div>
  );
};

export default Like;
