import { usePostOrDeleteBookmark } from 'hooks/query/usePostOrDeleteBookmark';
import useToastHandler from 'hooks/useToastHandler';
import { FaBookmark } from 'react-icons/fa';

interface bookmarkBtn {
  isBookmark: boolean;
  id: number;
}

const BookmarkBtn = ({ isBookmark, id }: bookmarkBtn) => {
  const toastHandler = useToastHandler(
    isBookmark,
    '담벼락을 저장했어요',
    '담벼락 저장을 취소했어요',
  );

  const mutate = usePostOrDeleteBookmark(isBookmark, id);

  return (
    <button
      className="flex items-center justify-center w-12 h-12 ml-auto border rounded-full active:bg-gray-00 border-gray-40"
      onClick={() => {
        mutate();
        toastHandler();
      }}
    >
      <FaBookmark
        className={`w-5 h-5 ${isBookmark ? 'text-orange-100' : 'text-gray-40'}`}
      />
    </button>
  );
};

export default BookmarkBtn;
