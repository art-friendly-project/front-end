import { useEffect, useState } from 'react';

interface reviewToast {
  isBookmarkChecked: boolean;
}

const ReviewToast = ({ isBookmarkChecked }: reviewToast) => {
  const [isToast, setIsToast] = useState(false);

  useEffect(() => {
    if (isBookmarkChecked) {
      setIsToast(true);
      setTimeout(() => {
        setIsToast(false);
      }, 2000);
    }
  }, [isBookmarkChecked]);
  return (
    <div
      className={`absolute bottom-16 items-center justify-center h-12 w-full rounded-3xl opacity-90 animate-appear-toast bg-purple-90 ${isToast ? 'flex' : 'hidden'}`}
    >
      <span className="text-white text-Body3-120">
        {isBookmarkChecked
          ? '담벼락을 저장했어요'
          : '스티커 붙이기를 완료했어요'}
      </span>
    </div>
  );
};

export default ReviewToast;
