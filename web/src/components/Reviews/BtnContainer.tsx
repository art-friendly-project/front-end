import { type Dispatch, type SetStateAction, useState } from 'react';
import StickerBtn from 'components/Reviews/StickerBtn';
import BookmarkBtn from 'components/Reviews/BookmarkBtn';
import ReviewToast from './ReviewToast';

interface btnContainer {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  setIsStickerOk: Dispatch<SetStateAction<boolean>>;
  isStickerOk: boolean;
}

const BtnContainer = ({
  setIsModal,
  isStickerOk,
  setIsStickerOk,
}: btnContainer) => {
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);

  return (
    <div className="relative flex mt-16 w-9/10">
      <StickerBtn setIsModal={setIsModal} setIsStickerOk={setIsStickerOk} />
      <BookmarkBtn
        isBookmarkChecked={isBookmarkChecked}
        setIsBookmarkChecked={setIsBookmarkChecked}
      />
      {isStickerOk ? (
        <ReviewToast isCheck={isStickerOk} text="스티커를 붙였어요." />
      ) : null}
      {isBookmarkChecked ? (
        <ReviewToast isCheck={isBookmarkChecked} text="담벼락을 저장했어요." />
      ) : null}
    </div>
  );
};

export default BtnContainer;
