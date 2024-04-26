import useToastHandler from 'hooks/useToastHandler';
import { type Dispatch, type SetStateAction } from 'react';
import { FaBookmark } from 'react-icons/fa';

interface bookmarkBtn {
  isBookmarkChecked: boolean;
  setIsBookmarkChecked: Dispatch<SetStateAction<boolean>>;
  setSelectedToast: Dispatch<SetStateAction<number>>;
}

const BookmarkBtn = ({
  isBookmarkChecked,
  setIsBookmarkChecked,
  setSelectedToast,
}: bookmarkBtn) => {
  const toastHandler = useToastHandler(isBookmarkChecked);

  return (
    <button
      className="flex items-center justify-center w-12 h-12 ml-auto border rounded-full border-gray-40"
      onClick={() => {
        setSelectedToast(1);
        setIsBookmarkChecked((prev) => !prev);
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
