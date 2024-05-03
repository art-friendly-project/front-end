interface user {
  id: number;
  nickName: string;
  profileImage: string;
  isTest: boolean;
  testTitle: string;
  introduce: string;
  interests: string[];
  reviews: myReview[];
}

interface myReview {
  id: number;
  showId: number;
  image: string;
}
