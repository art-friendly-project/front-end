import { useEffect, useState } from 'react';

interface reviewToast {
  isCheck: boolean;
  text: string;
}

const ReviewToast = ({ isCheck, text }: reviewToast) => {
  const [isToast, setIsToast] = useState(false);

  useEffect(() => {
    if (isCheck) {
      setIsToast(true);
      setTimeout(() => {
        setIsToast(false);
      }, 2000);
    }
  }, [isCheck]);

  return (
    <div
      className={`absolute bottom-16 items-center justify-center h-12 w-full rounded-3xl opacity-90 animate-appear-toast bg-purple-90 ${isToast ? 'flex' : 'hidden'}`}
    >
      <span className="text-white text-Body3-120">{text}</span>
    </div>
  );
};

export default ReviewToast;
