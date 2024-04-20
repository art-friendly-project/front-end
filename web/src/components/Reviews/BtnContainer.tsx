import { useState } from 'react';
import StickerBtn from 'components/Reviews/StickerBtn';
import BookmarkBtn from 'components/Reviews/BookmarkBtn';
import ReviewToast from './ReviewToast';

const BtnContainer = () => {
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);

  return (
    <div className="relative flex mt-16 w-9/10">
      <StickerBtn />
      <BookmarkBtn
        isBookmarkChecked={isBookmarkChecked}
        setIsBookmarkChecked={setIsBookmarkChecked}
      />
      <ReviewToast isBookmarkChecked={isBookmarkChecked} />
    </div>
  );
};

export default BtnContainer;
