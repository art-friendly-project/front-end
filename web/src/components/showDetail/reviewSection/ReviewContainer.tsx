import { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import ReviewSectionTitle from './ReviewSectionTitle';
import ReviewWriteBtn from './ReviewWriteBtn';
import LeftArrowBtn from './LeftArrowBtn';
import RightArrowBtn from './RightArrowBtn';
import PageIndicator from './PageIndicator';

interface reviewList {
  reviews: review[];
}

export interface review {
  id?: number;
  title: string;
  content: string;
  createdAt: string;
  user: {
    id: number;
    nickName: string;
    profileImage: string;
  };
}

const MAX_PAGE = 3;

const ReviewContainer = ({ reviews }: reviewList) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [reviewsBox, setReviewsBox] = useState<review[][]>([]);
  const reviewSlice = reviews.slice(
    (currentPage + 1) * 4,
    (currentPage + 1) * 4 + 4,
  );

  useEffect(() => {
    setReviewsBox([reviews.slice(0, 4)]);
  }, []);

  return (
    <>
      <ReviewWriteBtn />
      <ReviewSectionTitle />
      <LeftArrowBtn
        setCurrentPage={setCurrentPage}
        setReviewsBox={setReviewsBox}
        currentPage={currentPage}
      />
      <div
        className="w-full duration-700 whitespace-nowrap"
        style={{ transform: `translateX(-${currentPage}00%)` }}
      >
        {reviewsBox.map((reviews, idx) => (
          <ReviewList key={idx} reviews={reviews} />
        ))}
      </div>
      <PageIndicator currentPage={currentPage} MAX_PAGE={MAX_PAGE} />
      <RightArrowBtn
        setCurrentPage={setCurrentPage}
        setReviewsBox={setReviewsBox}
        reviewSlice={reviewSlice}
        currentPage={currentPage}
        MAX_PAGE={MAX_PAGE}
      />
    </>
  );
};
export default ReviewContainer;
