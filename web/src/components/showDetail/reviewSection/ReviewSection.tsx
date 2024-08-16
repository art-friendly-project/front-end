import NoReview from './NoReview';
import ReviewContainer from './ReviewContainer';
import ReviewSectionTitle from './ReviewSectionTitle';
import ReviewPostBtn from './ReviewPostBtn';
import { useGetReviews } from 'hooks/query/useGetReviews';

interface reviewSection {
  id: number;
  hasDambyeolagWritten: boolean;
}

const ReviewSection = ({ id, hasDambyeolagWritten }: reviewSection) => {
  const { data, fetchNextPage } = useGetReviews(id);

  const reviews = data?.pages.reduce((prev, next) => {
    return prev.concat(next);
  });

  if (reviews === undefined) {
    return <></>;
  }

  return (
    <div className="relative flex flex-col items-center w-full pt-6 mb-10">
      <ReviewSectionTitle />
      <ReviewPostBtn id={id} hasDambyeolagWritten={hasDambyeolagWritten} />
      {reviews.length === 0 ? (
        <NoReview id={id} />
      ) : (
        <ReviewContainer reviews={reviews} fetchNextPage={fetchNextPage} />
      )}
    </div>
  );
};

export default ReviewSection;
