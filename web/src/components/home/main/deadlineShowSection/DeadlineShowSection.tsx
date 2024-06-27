import DeadlineShowTitle from './DeadlineShowTitle';
import DeadlineShowList from './DeadlineShowList';
import { type Dispatch, type SetStateAction } from 'react';

interface deadlineShowSection {
  setShowId: Dispatch<SetStateAction<number>>;
}

const DeadlineShowSection = ({ setShowId }: deadlineShowSection) => {
  return (
    <div className="flex flex-col items-center w-full">
      <DeadlineShowTitle />
      <DeadlineShowList setShowId={setShowId} />
    </div>
  );
};

export default DeadlineShowSection;
