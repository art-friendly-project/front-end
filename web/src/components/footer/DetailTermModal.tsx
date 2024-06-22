import { type Dispatch, type SetStateAction } from 'react';
import DetailModalContents from 'components/termsOfUse/DetailModalContents';
import DetailModalHeader from 'components/termsOfUse/DetailModalHeader';

interface detailTermModal {
  isSelectModalIdx: number;
  setIsModal: Dispatch<SetStateAction<boolean[]>>;
}

const DetailTermModal = ({ isSelectModalIdx, setIsModal }: detailTermModal) => {
  return (
    <div className="absolute top-0 left-0 z-20 flex flex-col items-center w-full h-full overflow-y-scroll bg-white scrollbar-hide">
      <DetailModalHeader
        isSelectModalIdx={isSelectModalIdx}
        setIsModal={setIsModal}
      />
      <DetailModalContents isSelectModalIdx={isSelectModalIdx} />
    </div>
  );
};

export default DetailTermModal;
