import { type Dispatch, type SetStateAction, useState } from 'react';
import StickerBtn from 'components/Reviews/btnContainer/StickerBtn';
import BookmarkBtn from 'components/Reviews/btnContainer/BookmarkBtn';
import Toast from 'components/common/Toast';

interface btnContainer {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  selectedToast: number;
  setSelectedToast: Dispatch<SetStateAction<number>>;
}

const BtnContainer = ({
  setIsModal,
  selectedToast,
  setSelectedToast,
}: btnContainer) => {
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);

  return (
    <div className="relative flex mt-16 w-9/10">
      <StickerBtn setIsModal={setIsModal} />
      <BookmarkBtn
        isBookmarkChecked={isBookmarkChecked}
        setIsBookmarkChecked={setIsBookmarkChecked}
      />
      <Toast />
    </div>
  );
};

export default BtnContainer;
