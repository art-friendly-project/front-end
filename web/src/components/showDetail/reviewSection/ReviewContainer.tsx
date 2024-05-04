import ReviewSectionTitle from './ReviewSectionTitle';
import ReviewPostBtn from './ReviewPostBtn';
import ReviewSwiper from './ReviewSwiper';

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

const ReviewContainer = ({ reviews }: reviewList) => {
  return (
    <>
      <ReviewPostBtn />
      <ReviewSectionTitle />
      <ReviewSwiper reviews={reviews} />
    </>
  );
};
export default ReviewContainer;
