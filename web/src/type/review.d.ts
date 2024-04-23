interface review {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  stickers: sticker[];
  user: user;
}

interface sticker {
  id: number;
  userId: number;
  sticker: string;
  comments: string;
}

interface user {
  id: number;
  nickName: string;
  profileImage: string;
}
