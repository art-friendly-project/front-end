import DeadlineShowInfo from './DeadlineShowInfo';
import DeadlineShowList from './DeadlineShowList';

const DeadlineShowSection = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <DeadlineShowInfo />
      <DeadlineShowList />
    </div>
  );
};

export default DeadlineShowSection;
