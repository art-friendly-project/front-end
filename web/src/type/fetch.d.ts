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
        mbtiSimpleRspDto: null | {
          imageUrl: string;
          subTitle: string;
          title: string;
        };
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
      startDate: string;
      endDate: string;
      place: string;
      area: string;
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
      pageable: {
        pageNumber: number;
      };
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
      hasDambyeolagWritten: boolean;
      exhibitionInfoRspDto: {
        id: 3;
        title: string;
        detailInfoUrl: string;
        startDate: string;
        endDate: string;
        place: string;
        realmName: string;
        area: string;
        imageUrl: string;
        ticketingUrl: string;
        phone: string;
        price: string;
      };
    };
  };
}

interface fetchReview {
  data: {
    data: {
      content: Array<{
        id: number;
        title: string;
        body: string;
      }>;
      totalPages: number;
    };
  };
}

interface fetchReviewDetail {
  data: {
    data: {
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
      stickerRspDtos: [
        {
          id: number;
          stickerType: string;
          body: string;
          memberId: number;
          dambyeolagId: number;
        },
      ];
      isBookmark: boolean;
      isSticker: boolean;
    };
  };
}

interface fetchSavedReviews {
  data: {
    data: {
      content: Array<{
        id: number;
        exhibitionImageUrl: string;
      }>;
      totalPages: number;
    };
  };
}
