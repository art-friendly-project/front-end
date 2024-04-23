interface review {
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

interface ReviewUser {
  id: number;
  nickName: string;
  profileImage: string;
}
