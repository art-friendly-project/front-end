import DeadlineShowTitle from './DeadlineShowTitle';
import DeadlineShowList from './DeadlineShowList';

const DeadlineShowSection = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <DeadlineShowTitle />
      <DeadlineShowList />
    </div>
  );
};

export default DeadlineShowSection;
