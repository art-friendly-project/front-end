import CancelBtn from './CancelBtn';
import CompleteBtn from './CompleteBtn';

interface btnContainer {
  isChecks: boolean[];
}

const BtnContainer = ({ isChecks }: btnContainer) => {
  return (
    <div className="sticky flex justify-center mt-auto w-[90%] bottom-6">
      <CancelBtn />
      <CompleteBtn isChecks={isChecks} />
    </div>
  );
};

export default BtnContainer;
