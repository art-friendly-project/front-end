import api from 'api';
import useToastHandler from 'hooks/useToastHandler';
import { type Dispatch, type SetStateAction } from 'react';
import { FaBookmark } from 'react-icons/fa';

interface bookmarkBtn {
  isBookmarkChecked: boolean;
  setIsBookmarkChecked: Dispatch<SetStateAction<boolean>>;
  id: number;
}

const BookmarkBtn = ({
  isBookmarkChecked,
  setIsBookmarkChecked,
  id,
}: bookmarkBtn) => {
  const toastHandler = useToastHandler(
    isBookmarkChecked,
    '담벼락을 저장했어요',
    '담벼락 저장을 취소했어요',
  );

  const btnHandler = async () => {
    try {
      if (!isBookmarkChecked) {
        await api.post(`/dambyeolags/bookmarks?dambyeolagId=${id}`);
      }

      if (isBookmarkChecked) {
        await api.delete(`/dambyeolags/bookmarks?dambyeolagId=${id}`);
      }

      setIsBookmarkChecked((prev) => !prev);
      toastHandler();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      className="flex items-center justify-center w-12 h-12 ml-auto border rounded-full active:bg-gray-00 border-gray-40"
      onClick={() => {
        void btnHandler();
      }}
    >
      <FaBookmark
        className={`w-5 h-5 ${isBookmarkChecked ? 'text-orange-100' : 'text-gray-40'}`}
      />
    </button>
  );
};

export default BookmarkBtn;
