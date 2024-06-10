import { type Dispatch, type SetStateAction } from 'react';
import DetailModalHeader from './DetailModalHeader';
import DetailModalContents from './DetailModalContents';
import BtnBasic from 'components/common/BtnBasic';

interface detailModal {
  isSelectModalIdx: number;
  setIsModal: Dispatch<SetStateAction<boolean[]>>;
  setIsChecks: Dispatch<SetStateAction<boolean[]>>;
}

const DetailModal = ({
  isSelectModalIdx,
  setIsModal,
  setIsChecks,
}: detailModal) => {
  const agreeBtnHandler = () => {
    setIsChecks((prev) => {
      return prev.map((check, i) => {
        if (i === isSelectModalIdx) return true;
        else return check;
      });
    });
    setIsModal([false, false, false]);
  };

  return (
    <div className="absolute z-10 flex flex-col items-center w-full h-full bg-white">
      <DetailModalHeader
        isSelectModalIdx={isSelectModalIdx}
        setIsModal={setIsModal}
      />
      <DetailModalContents isSelectModalIdx={isSelectModalIdx} />
      <BtnBasic
        name="동의하기"
        fn={agreeBtnHandler}
        disable={false}
        style="mb-6"
      />
    </div>
  );
};

export default DetailModal;
