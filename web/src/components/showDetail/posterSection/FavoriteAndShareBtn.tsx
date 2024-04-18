import DetailShowFavoriteBtn from './DetailShowFavoriteBtn';
import ShareBtn from './ShareBtn';

interface favoriteAndShareBtn {
  favorite: boolean;
}

const FavoriteAndShareBtn = ({ favorite }: favoriteAndShareBtn) => {
  return (
    <div className="absolute z-20 flex right-3 top-4">
      <DetailShowFavoriteBtn favorite={favorite} />
      <ShareBtn />
    </div>
  );
};

export default FavoriteAndShareBtn;
