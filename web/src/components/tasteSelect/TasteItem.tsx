import { useState } from 'react';
import SelectCover from './SelectCover';

interface tasteItem {
  tasteImg: string;
  tasteName: string;
  setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TasteItem = ({ tasteImg, tasteName, setSelectedList }: tasteItem) => {
  const [selected, setSelected] = useState(false);

  const selectBtnHandler = () => {
    setSelected((prev) => !prev);

    if (selected) {
      setSelectedList((prev) => prev.filter((item) => item !== tasteName));
      return;
    }

    if (!selected) {
      setSelectedList((prev) => [...prev, tasteName]);
    }
  };

  return (
    <button
      className="relative flex flex-col items-center basis-1/3"
      onClick={selectBtnHandler}
    >
      {selected ? <SelectCover /> : null}
      <img className="w-9/10 h-28 rounded-xl" src={tasteImg} />
      <span className="mt-2 mb-4 text-Body3-M">{tasteName}</span>
    </button>
  );
};

export default TasteItem;
