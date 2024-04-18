import { useAppSelector } from 'hooks';
import { selectToast } from 'store/modules/toast';

const Toast = () => {
  const isFavorite = useAppSelector(selectToast)[1];

  return (
    <div
      className={`absolute -top-14 flex items-center justify-center h-12 left-[5%] w-9/10 rounded-3xl opacity-90 animate-appear-toast ${isFavorite ? 'bg-gray-60' : 'bg-purple-90'}`}
    >
      <span className="text-white text-Body3-120">
        {isFavorite
          ? '좋아요를 취소했어요.'
          : '좋아요를 했어요. 캘린더에서 확인해보세요!'}
      </span>
    </div>
  );
};

export default Toast;
