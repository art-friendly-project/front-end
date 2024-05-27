interface reviewTitle {
  title: string;
}

const ReviewTitle = ({ title }: reviewTitle) => {
  return (
    <span className="w-10/12 h-10 mt-2 truncate text-Body3 text-start">
      {title}
    </span>
  );
};

export default ReviewTitle;
