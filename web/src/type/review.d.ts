interface review {
  id: number;
  title: string;
  body: string;
}

interface reviewDetail {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  stickers: sticker[];
  user: ReviewUser;
}

interface sticker {
  id: number;
  userId: number;
  sticker: string;
  comments: string;
}

interface reviewUser {
  id: number;
  nickName: string;
  profileImage: string;
}

interface myReview {
  id: number;
  showId: number;
  image: string;
}
