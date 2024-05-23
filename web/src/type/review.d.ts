interface review {
  id: number;
  title: string;
  body: string;
}

interface reviewDetail {
  id: number;
  title: string;
  body: string;
  lastModifiedTime: string;
  memberResponseDto: {
    id: number;
    email: string;
    imageUrl: string;
    nickName: string;
  };
  stickerRspDtos: Array<{
    id: number;
    stickerType: string;
    body: string;
    memberId: number;
    dambyeolagId: number;
  }>;
  isBookmark: boolean;
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
