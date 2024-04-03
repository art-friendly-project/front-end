import { useState } from 'react';
import TasteList from 'components/tasteSelect/TasteList';
import TasteSelectTitle from 'components/tasteSelect/TasteSelectTitle';
import TasteSaveBtn from 'components/tasteSelect/TasteSaveBtn';

const TasteSelect = () => {
  const [selectedList, setSelectedList] = useState<string[]>([]);

  return (
    <>
      <TasteSelectTitle />
      <TasteList setSelectedList={setSelectedList} />
      <TasteSaveBtn selectedList={selectedList} />
    </>
  );
};

export default TasteSelect;
