import { type Dispatch, type SetStateAction, useState, useEffect } from 'react';
import StickerBtn from 'components/reviews/btnContainer/StickerBtn';
import BookmarkBtn from 'components/reviews/btnContainer/BookmarkBtn';
import Toast from 'components/common/Toast';

interface btnContainer {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  id: number;
  isBookmark: boolean;
}

const BtnContainer = ({ setIsModal, id, isBookmark }: btnContainer) => {
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);

  useEffect(() => {
    setIsBookmarkChecked(isBookmark);
  }, [isBookmark]);

  return (
    <div className="absolute bottom-[5%] flex mt-16 w-9/10">
      <StickerBtn setIsModal={setIsModal} />
      <BookmarkBtn
        isBookmarkChecked={isBookmarkChecked}
        setIsBookmarkChecked={setIsBookmarkChecked}
        id={id}
      />
      <Toast />
    </div>
  );
};

export default BtnContainer;
