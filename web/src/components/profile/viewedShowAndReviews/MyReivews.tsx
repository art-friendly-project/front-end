import Review from './Review';

interface viewedShowAndReviewsSection {
  reviews: savedReview[];
  userId: number;
}
const MyReivews = ({ reviews, userId }: viewedShowAndReviewsSection) => {
  return (
    <div className="flex w-full mt-8 flex-wrap px-[5%]">
      {userId === 0 && reviews.length === 0 ? (
        <div className="flex flex-col items-center w-full">
          <span className="mt-10 mb-2 text-Body3 texr-gray-110">
            아직 남긴 담벼락이 없습니다.
          </span>
          <span className="mb-10 text-Body1-M text-gray-80">
            전시/행사 정보에서 담벼락을 남겨보세요.
          </span>
        </div>
      ) : (
        reviews.map((review, idx) => (
          <Review
            key={review.id}
            id={review.id}
            idx={idx}
            imageUrl={review.exhibitionImageUrl}
          />
        ))
      )}
    </div>
  );
};

export default MyReivews;
