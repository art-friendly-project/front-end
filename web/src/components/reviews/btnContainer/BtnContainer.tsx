import { type Dispatch, type SetStateAction } from 'react';
import StickerBtn from 'components/reviews/btnContainer/StickerBtn';
import BookmarkBtn from 'components/reviews/btnContainer/BookmarkBtn';
import Toast from 'components/common/Toast';

interface btnContainer {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  id: number;
  isBookmark: boolean;
  isSticker: boolean;
}

const BtnContainer = ({
  setIsModal,
  id,
  isBookmark,
  isSticker,
}: btnContainer) => {
  return (
    <div className="absolute bottom-[5%] flex mt-16 w-9/10">
      {isSticker ? null : <StickerBtn setIsModal={setIsModal} />}
      <BookmarkBtn isBookmark={isBookmark} id={id} />
      <Toast />
    </div>
  );
};

export default BtnContainer;
