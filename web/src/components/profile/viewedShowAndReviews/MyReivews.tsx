import Review from './Review';

interface viewedShowAndReviewsSection {
  myReviews: savedReview[];
  userId: number;
}
const MyReivews = ({ myReviews, userId }: viewedShowAndReviewsSection) => {
  return (
    <div className="flex w-full mt-8 flex-wrap px-[5%]">
      {userId === 0 && myReviews.length === 0 ? (
        <div className="flex flex-col items-center w-full">
          <span className="mt-10 mb-2 text-Body3 texr-gray-110">
            아직 남긴 담벼락이 없습니다.
          </span>
          <span className="mb-10 text-Body1-M text-gray-80">
            전시/행사 정보에서 담벼락을 남겨보세요.
          </span>
        </div>
      ) : (
        myReviews.map((review, idx) => (
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
