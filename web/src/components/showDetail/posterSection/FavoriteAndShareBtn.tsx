import DetailShowFavoriteBtn from './DetailShowFavoriteBtn';
import ShareBtn from './ShareBtn';

interface favoriteAndShareBtn {
  isLike: boolean;
}

const FavoriteAndShareBtn = ({ isLike }: favoriteAndShareBtn) => {
  return (
    <div className="absolute z-20 flex right-3 top-4">
      <DetailShowFavoriteBtn isLike={isLike} />
      <ShareBtn />
    </div>
  );
};

export default FavoriteAndShareBtn;
