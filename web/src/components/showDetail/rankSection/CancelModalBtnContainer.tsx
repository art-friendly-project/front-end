import { useDeleteRank } from 'hooks/query/useDeleteRank';
import { type Dispatch, type SetStateAction } from 'react';

interface cancelModalBtnContainer {
  id: number;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

const CancelModalBtnContainer = ({
  id,
  setIsModal,
}: cancelModalBtnContainer) => {
  const mutate = useDeleteRank(id);

  return (
    <div className="mt-4">
      <button
        className="w-32 h-12 border-2 border-orange-100 rounded-lg text-Subhead text-gray-110 active:bg-gray-00"
        onClick={() => {
          setIsModal(false);
        }}
      >
        아니요
      </button>
      <button
        className="w-32 h-12 ml-2 text-white bg-orange-100 rounded-lg text-Subhead active:bg-orange-dark-100"
        onClick={() => {
          mutate();
          setIsModal(false);
        }}
      >
        네
      </button>
    </div>
  );
};

export default CancelModalBtnContainer;
