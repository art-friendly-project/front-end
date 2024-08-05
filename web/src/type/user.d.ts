interface user {
  memberDetailsRspDto: {
    id: number;
    email: string;
    imageUrl: string;
    nickName: string;
    selfIntro: null | string;
    mbtiSimpleRspDto: null | {
      imageUrl: string;
      subTitle: string;
      title: string;
    };
    artPreferenceTypeList: string[];
  };
  StickerCount: number;
  dambyeolagCount: number;
  interestedExhibitionCount: number;
}

interface member {
  id: number;
  email: 'hong2024@gmail.com';
  imageUrl: string;
  nickName: string;
  selfIntro: null;
  mbtiSimpleRspDto: null | string;
  artPreferenceTypeList: string[];
}

interface auth {
  accessToken: string;
  refreshToken: string;
}
