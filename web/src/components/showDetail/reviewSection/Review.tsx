import tape from 'assets/images/etc/tape.svg';

interface review {
  title: string;
  content: string;
}

const Review = ({ title, content }: review) => {
  return (
    <button className="relative flex flex-col items-center justify-center mb-8 mr-6 h-44 w-43/100 shadow-custom3 rounded-xl">
      <img src={tape} className="absolute -top-3" />
      <span className="w-10/12 h-10 mt-4 truncate text-Body3 text-start">
        {title}
      </span>
      <span className="w-10/12 h-10 overflow-hidden whitespace-break-spaces text-Body2-M text-ellipsis">
        {content}
      </span>
      <span>...</span>
    </button>
  );
};

export default Review;
