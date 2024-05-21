interface user {
  memberDetailsRspDto: {
    id: number;
    email: string;
    imageUrl: string;
    nickName: string;
    selfIntro: null | string;
    mbtiSimpleRspDto: null | string;
    artPreferenceTypeList: string[];
  };
  StickerCount: number;
  dambyeolagCount: number;
  interestedExhibitionCount: number;
}
