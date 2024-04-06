import PopularShowTitle from './PopularShowTitle';
import PopularShowList from './PopularShowList';

const PopularShowSection = () => {
  return (
    <div className="flex flex-col items-center w-full mt-10 mb-8">
      <PopularShowTitle />
      <PopularShowList />
    </div>
  );
};

export default PopularShowSection;
