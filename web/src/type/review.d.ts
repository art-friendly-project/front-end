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
  isSticker: boolean;
}

interface savedReview {
  id: number;
  exhibitionImageUrl: string;
}
