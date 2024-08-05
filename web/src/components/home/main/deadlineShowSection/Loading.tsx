import DeadlineShowInfoLoading from './DeadlineShowInfoLoading';
import DeadlineShowLoading from './DeadlineShowLoading';

const Loading = () => {
  return (
    <>
      {[...new Array(3)].map((_, i) => (
        <div className="flex w-full mb-6 rounded-lg pl-[5%]" key={i}>
          <DeadlineShowLoading />
          <DeadlineShowInfoLoading />
        </div>
      ))}
    </>
  );
};

export default Loading;
