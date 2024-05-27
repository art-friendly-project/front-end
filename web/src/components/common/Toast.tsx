import { useAppSelector } from 'hooks';
import { selectToast } from 'store/modules/toast';
import { selectToastText } from 'store/modules/toastText';

const Toast = () => {
  const isToast = useAppSelector(selectToast)[0];
  const isCheck = useAppSelector(selectToast)[1];
  const text = useAppSelector(selectToastText);

  return (
    <>
      {isToast ? (
        <div
          className={`absolute -top-14 z-30 flex items-center justify-center h-12 left-[5%] w-9/10 rounded-3xl opacity-90 animate-appear-toast ${isCheck ? 'bg-gray-60' : 'bg-purple-90'}`}
        >
          <span className="text-white text-Body3-120">
            {isCheck ? text[1] : text[0]}
          </span>
        </div>
      ) : null}
    </>
  );
};

export default Toast;
