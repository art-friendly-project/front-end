import DetailShowFavoriteBtn from './DetailShowFavoriteBtn';
import ShareBtn from './ShareBtn';

interface favoriteAndShareBtn {
  isLike: boolean;
  id: number;
}

const FavoriteAndShareBtn = ({ isLike, id }: favoriteAndShareBtn) => {
  return (
    <div className="absolute z-20 flex right-3 top-4">
      <DetailShowFavoriteBtn isLike={isLike} id={id} />
      <ShareBtn />
    </div>
  );
};

export default FavoriteAndShareBtn;
