import tastes from 'assets/data/tastes';
import TasteItem from './TasteItem';

interface tasteList {
  setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TasteList = ({ setSelectedList }: tasteList) => {
  return (
    <div className="flex flex-wrap px-4 mb-20 overflow-y-scroll scrollbar-hide">
      {tastes.map((taste) => (
        <TasteItem
          key={taste.id}
          tasteImg={taste.image}
          tasteName={taste.name}
          setSelectedList={setSelectedList}
        />
      ))}
    </div>
  );
};

export default TasteList;
