import PopularShowTitle from './PopularShowTitle';
import PopularShowList from './PopularShowList';

interface popularShowSection {
  popularShowData: popularShow[] | undefined;
  isPopularShowLoading: boolean;
}

const PopularShowSection = ({
  popularShowData,
  isPopularShowLoading,
}: popularShowSection) => {
  return (
    <div className="flex flex-col items-center w-full mt-8 mb-8">
      <PopularShowTitle />
      <PopularShowList
        popularShowData={popularShowData}
        isPopularShowLoading={isPopularShowLoading}
      />
    </div>
  );
};

export default PopularShowSection;
