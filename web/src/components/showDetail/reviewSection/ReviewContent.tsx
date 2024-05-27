interface reviewContent {
  body: string;
}

const ReviewContent = ({ body }: reviewContent) => {
  return (
    <>
      <span className="w-10/12 h-10 line-clamp-2 text-Body2-M text-start">
        {body}
      </span>
    </>
  );
};
export default ReviewContent;
