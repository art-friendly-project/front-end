interface fetchAuth {
  data: {
    data: {
      accessToken: string;
      refreshToken: string;
    };
  };
}

interface fetchUser {
  data: {
    data: {
      id: number;
      email: string;
      imageUrl: string;
      nickName: string;
      selfIntro: null | string;
      mbtiSimpleRspDto: null | string;
      artPreferenceTypeList: string[];
    };
  };
}

interface fetchProfile {
  data: {
    data: {
      StickerCount: number;
      dambyeolagCount: nuber;
      interestedExhibitionCount: number;
      memberDetailsRspDto: {
        id: number;
        email: string;
        imageUrl: string;
        nickName: string;
        selfIntro: null | string;
        mbtiSimpleRspDto: null | string;
        artPreferenceTypeList: string[];
      };
    };
  };
}
