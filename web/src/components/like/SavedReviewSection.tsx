import Review from 'components/profile/viewedShowAndReviews/Review';
import { userData } from 'mock/mockData';

const SavedReviewSection = () => {
  const reviews = userData[0].reviews;

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap w-9/10">
        {reviews.length === 0 ? (
          <>
            <span className="mt-10 mb-2 text-Body3 texr-gray-110 bg-">
              아직 남긴 담벼락이 없습니다.
            </span>
            <span className="mb-10 text-Body1-M text-gray-80">
              전시/행사 정보에서 담벼락을 남겨보세요.
            </span>
          </>
        ) : (
          reviews.map((review, idx) => (
            <Review
              key={review.id}
              id={review.id}
              idx={idx}
              showId={review.showId}
              image={review.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SavedReviewSection;
