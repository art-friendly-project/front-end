import MyReivews from '../viewedShowAndReviews/MyReivews';

interface reviewSection {
  myReviews: savedReview[];
  userId: number;
}

const ReviewSection = ({ myReviews, userId }: reviewSection) => {
  return (
    <div className="flex flex-col w-full mt-8 shrink-0">
      <span className="pl-[5%] text-Subhead text-gray-110 -mb-4">
        작성한 담벼락
      </span>
      <MyReivews myReviews={myReviews} userId={userId} />
    </div>
  );
};

export default ReviewSection;
