interface reviewContent {
  content: string;
}

const ReviewContent = ({ content }: reviewContent) => {
  return (
    <>
      <span className="w-10/12 h-10 overflow-hidden whitespace-break-spaces text-Body2-M text-ellipsis">
        {content}
      </span>
      <span>...</span>
    </>
  );
};

export default ReviewContent;
