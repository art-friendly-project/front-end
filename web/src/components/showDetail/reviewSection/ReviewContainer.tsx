import ReviewList from './ReviewList';
import ReviewSectionTitle from './ReviewSectionTitle';
import ReviewWriteBtn from './ReviewWriteBtn';

interface reviewList {
  reviews: review[];
}

export interface review {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

const ReviewContainer = ({ reviews }: reviewList) => {
  return (
    <>
      <ReviewWriteBtn />
      <ReviewSectionTitle />
      <div className="w-full whitespace-nowrap">
        <div className="inline-block">
          <ReviewList reviews={reviews.slice(0, 4)} />
        </div>
      </div>
    </>
  );
};
export default ReviewContainer;
