import PopularShowInfoLoading from './PopularShowInfoLoading';
import PopularShowLoading from './PopularShowLoading';

const Loading = () => {
  return (
    <>
      {[...new Array(3)].map((_, i) => (
        <div
          className="relative flex items-center px-4 py-2 mb-4 rounded-xl shadow-custom2 w-9/10"
          key={i}
        >
          <PopularShowLoading />
          <PopularShowInfoLoading />
        </div>
      ))}
    </>
  );
};

export default Loading;
