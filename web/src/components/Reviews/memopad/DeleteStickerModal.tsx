import { type Dispatch, type SetStateAction } from 'react';

interface deleteStickerModal {
  setIsStickerDeleteModal: Dispatch<SetStateAction<boolean>>;
  setReview: Dispatch<SetStateAction<review>>;
  selectStickerIdx: number;
}

const DeleteStickerModal = ({
  setIsStickerDeleteModal,
  setReview,
  selectStickerIdx,
}: deleteStickerModal) => {
  return (
    <>
      <button
        className="absolute bottom-0 z-20 w-full h-screen bg-black opacity-50"
        onClick={() => {
          setIsStickerDeleteModal(false);
        }}
      />
      <div className="rounded-2xl absolute z-30 w-72 h-48 bg-white top-[30%] flex flex-col justify-center items-center">
        <span className="mb-8 text-Headline-M text-gray-110">
          남긴 스티커를 삭제할까요?
        </span>
        <button
          className="absolute h-10 border-2 border-orange-100 rounded-lg w-28 left-7 bottom-4 text-Subhead text-gray-110"
          onClick={() => {
            setIsStickerDeleteModal(false);
          }}
        >
          닫기
        </button>
        <button
          className="absolute h-10 text-white bg-orange-100 rounded-lg w-28 right-7 bottom-4 text-Subhead"
          onClick={() => {
            setReview((prev) => {
              prev.stickers = prev.stickers.filter(
                (_, i) => i !== selectStickerIdx,
              );

              return prev;
            });
            setIsStickerDeleteModal(false);
          }}
        >
          삭제하기
        </button>
      </div>
    </>
  );
};

export default DeleteStickerModal;
