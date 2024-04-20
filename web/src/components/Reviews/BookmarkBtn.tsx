import { type Dispatch, type SetStateAction } from 'react';
import { FaBookmark } from 'react-icons/fa';

interface bookmarkBtn {
  isBookmarkChecked: boolean;
  setIsBookmarkChecked: Dispatch<SetStateAction<boolean>>;
}

const BookmarkBtn = ({
  isBookmarkChecked,
  setIsBookmarkChecked,
}: bookmarkBtn) => {
  return (
    <button
      className="flex items-center justify-center w-12 h-12 ml-auto border rounded-full border-gray-40"
      onClick={() => {
        setIsBookmarkChecked((prev) => !prev);
      }}
    >
      <FaBookmark
        className={`w-5 h-5 ${isBookmarkChecked ? 'text-orange-100' : 'text-gray-40'}`}
      />
    </button>
  );
};

export default BookmarkBtn;
