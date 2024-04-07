import { useState } from 'react';
import TasteList from 'components/tasteSelect/TasteList';
import TasteSelectTitle from 'components/tasteSelect/TasteSelectTitle';
import BtnAndRightArrow from 'components/common/BtnAndRightArrow';

const TasteSelect = () => {
  const [selectedList, setSelectedList] = useState<string[]>([]);

  return (
    <div className="flex flex-col items-center w-full h-full pt-10">
      <TasteSelectTitle />
      <TasteList setSelectedList={setSelectedList} />
      <BtnAndRightArrow
        selectedList={selectedList}
        endpoint="/home"
        name="저장하기"
      />
    </div>
  );
};

export default TasteSelect;
