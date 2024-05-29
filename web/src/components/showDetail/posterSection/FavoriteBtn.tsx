import DetailShowFavoriteBtn from './DetailShowFavoriteBtn';

interface favoriteBtn {
  isLike: boolean;
  id: number;
}

const FavoriteBtn = ({ isLike, id }: favoriteBtn) => {
  return (
    <div className="absolute z-20 flex right-[5%] top-4">
      <DetailShowFavoriteBtn isLike={isLike} id={id} />
    </div>
  );
};

export default FavoriteBtn;
