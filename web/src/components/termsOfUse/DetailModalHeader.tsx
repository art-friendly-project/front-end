import { type Dispatch, type SetStateAction } from 'react';
import DetailModalCloseBtn from './DetailModalCloseBtn';
import DetailModalTitle from './DetailModalTitle';

interface detailModalHeader {
  isSelectModalIdx: number;
  setIsModal: Dispatch<SetStateAction<boolean[]>>;
}

const DetailModalHeader = ({
  isSelectModalIdx,
  setIsModal,
}: detailModalHeader) => {
  return (
    <div className="sticky top-0 flex items-center justify-center w-full bg-white h-18">
      <DetailModalTitle isSelectModalIdx={isSelectModalIdx} />
      <DetailModalCloseBtn setIsModal={setIsModal} />
    </div>
  );
};

export default DetailModalHeader;
