import { useState } from 'react';
import SelectCover from './SelectCover';

interface tasteItem {
  taste: string;
  tasteKr: string;
  setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TasteItem = ({ taste, tasteKr, setSelectedList }: tasteItem) => {
  const [selected, setSelected] = useState(false);

  const selectBtnHandler = () => {
    setSelected((prev) => !prev);

    if (selected) {
      setSelectedList((prev) => prev.filter((item) => item !== taste));
      return;
    }

    if (!selected) {
      setSelectedList((prev) => [...prev, taste]);
    }
  };

  return (
    <button
      className="relative flex flex-col items-center basis-1/3"
      onClick={selectBtnHandler}
    >
      {selected ? <SelectCover /> : null}
      <img className="w-4/5 h-28 rounded-xl" src={taste} />
      <span className="mt-2 mb-4 text-Body3-M">{tasteKr}</span>
    </button>
  );
};

export default TasteItem;
