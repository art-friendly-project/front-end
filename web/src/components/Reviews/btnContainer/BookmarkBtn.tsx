import { useAppDispatch } from 'hooks';
import useToastHandler from 'hooks/useToastHandler';
import { type Dispatch, type SetStateAction } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { toastTextActions } from 'store/modules/toastText';

interface bookmarkBtn {
  isBookmarkChecked: boolean;
  setIsBookmarkChecked: Dispatch<SetStateAction<boolean>>;
}

const BookmarkBtn = ({
  isBookmarkChecked,
  setIsBookmarkChecked,
}: bookmarkBtn) => {
  const toastHandler = useToastHandler(isBookmarkChecked);

  const dispatch = useAppDispatch();

  return (
    <button
      className="flex items-center justify-center w-12 h-12 ml-auto border rounded-full active:bg-gray-00 border-gray-40"
      onClick={() => {
        setIsBookmarkChecked((prev) => !prev);
        dispatch(
          toastTextActions.current([
            '담벼락을 저장했어요',
            '담벼락 저장을 취소했어요',
          ]),
        );
        toastHandler();
      }}
    >
      <FaBookmark
        className={`w-5 h-5 ${isBookmarkChecked ? 'text-orange-100' : 'text-gray-40'}`}
      />
    </button>
  );
};

export default BookmarkBtn;
