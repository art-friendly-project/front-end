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

interface fetchPopularShow {
  data: {
    data: Array<{
      exhibitionId: number;
      rank: number;
      title: string;
      imageUrl: string;
      rankShift: string;
    }>;
  };
}

interface fetchEndShow {
  data: {
    data: Array<{
      id: number;
      title: string;
      temperature: number;
      startDate: string;
      endDate: string;
      area: string;
      isLike: false;
      imageUrl: string;
    }>;
  };
}

interface fetchShow {
  data: {
    data: {
      content: Array<{
        id: number;
        title: string;
        temperature: number;
        startDate: string;
        endDate: string;
        area: string;
        isLike: false;
        imageUrl: string;
      }>;
      totalPages: number;
    };
  };
}

interface fetchShowDetail {
  data: {
    data: {
      id: number;
      temperature: number;
      checkTemperature: null | string;
      isLike: false;
      exhibitionInfoRspDto: {
        id: 3;
        title: string;
        startDate: string;
        endDate: string;
        place: string;
        realmName: string;
        area: string;
        imageUrl: string;
        gpsX: 126.99488186959195;
        gpsY: 37.594828907887845;
        ticketingUrl: string;
        phone: string;
        price: string;
      };
    };
  };
}