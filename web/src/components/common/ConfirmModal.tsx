import { useAppDispatch, useAppSelector } from 'hooks';
import { isModalActions, selectIsModal } from 'store/modules/isModal';

interface confirmModal {
  text: string;
  fn: () => void;
  cancelFn?: () => void;
}

const ConfirmModal = ({ text, fn, cancelFn }: confirmModal) => {
  const dispatch = useAppDispatch();
  const isModal = useAppSelector(selectIsModal);

  return (
    <>
      {isModal ? (
        <>
          <button
            className="absolute top-0 z-30 w-full h-screen bg-black opacity-50"
            onClick={() => {
              dispatch(isModalActions.setIsModal(false));
            }}
          />
          <div className="absolute z-40 flex flex-col items-center justify-center h-48 mb-[30%] bg-white rounded-2xl w-80">
            <span className="mb-10 text-center whitespace-pre-wrap text-Headline-M text-gray-110">
              {text}
            </span>
            <button
              className="absolute w-32 h-10 border-2 border-orange-100 rounded-lg left-7 bottom-4 text-Subhead text-gray-110"
              onClick={() => {
                dispatch(isModalActions.setIsModal(false));
                if (cancelFn !== undefined) cancelFn();
              }}
            >
              취소
            </button>
            <button
              className="absolute w-32 h-10 text-white bg-orange-100 rounded-lg right-7 bottom-4 text-Subhead"
              onClick={() => {
                dispatch(isModalActions.setIsModal(false));
                fn();
              }}
            >
              확인
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ConfirmModal;
