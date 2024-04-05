import SuggestTasteShowInfo from './SuggestTasteShowInfo';

import SuggestTasteShowList from './SuggestTasteShowList';

const SuggestTasteShowSection = () => {
  return (
    <div className="relative flex flex-col items-center w-full pb-6 bg-orange-0">
      <SuggestTasteShowInfo />
      <SuggestTasteShowList />
    </div>
  );
};

export default SuggestTasteShowSection;
