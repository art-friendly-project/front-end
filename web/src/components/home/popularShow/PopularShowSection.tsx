import PopularShowInfo from './PopularShowInfo';
import PopularShowList from './PopularShowList';

const PopularShowSection = () => {
  return (
    <div className="flex flex-col items-center w-full mt-10 mb-16">
      <PopularShowInfo />
      <PopularShowList />
    </div>
  );
};

export default PopularShowSection;
