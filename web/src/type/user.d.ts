interface user {
  id: number;
  nickName: string;
  profileImage: string;
  isTest: boolean;
  testTitle: string;
  introduce: string;
  interest: string[];
  reviews: userReview[];
}

interface userReview {
  showId: number;
  reviewId: number;
  image: string;
}
