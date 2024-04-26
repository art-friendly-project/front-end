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
      <StickerBtn setIsModal={setIsModal} setSelectedToast={setSelectedToast} />
      <BookmarkBtn
        isBookmarkChecked={isBookmarkChecked}
        setIsBookmarkChecked={setIsBookmarkChecked}
        setSelectedToast={setSelectedToast}
      />
      {selectedToast === 0 ? (
        <Toast text={['스티커를 붙이기를 완료했어요', '스티커를 지웠어요']} />
      ) : null}
      {selectedToast === 1 ? (
        <Toast text={['담벼락을 저장했어요', '담벼락 저장을 취소했어요']} />
      ) : null}
    </div>
  );
};

export default BtnContainer;
