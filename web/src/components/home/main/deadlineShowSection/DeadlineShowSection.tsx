import DeadlineShowTitle from './DeadlineShowTitle';
import DeadlineShowList from './DeadlineShowList';

interface deadlineShowList {
  endShowData: show[] | undefined;
  isEndShowLoading: boolean;
}

const DeadlineShowSection = ({
  endShowData,
  isEndShowLoading,
}: deadlineShowList) => {
  return (
    <div className="flex flex-col items-center w-full">
      <DeadlineShowTitle />
      <DeadlineShowList
        endShowData={endShowData}
        isEndShowLoading={isEndShowLoading}
      />
    </div>
  );
};

export default DeadlineShowSection;
