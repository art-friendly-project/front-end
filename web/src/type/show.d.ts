interface show {
  id: number;
  title: string;
  area: string;
  temperature: number;
  startDate: string;
  endDate: string;
  imageUrl: string;
  isLike: false;
}

interface popularShow {
  exhibitionId: number;
  rank: number;
  title: string;
  imageUrl: string;
  rankShift: string;
  startDate: string;
  endDate: string;
  place: string;
  area: string;
}

interface favoriteShow {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  imageUrl: string;
  isLike: boolean;
  area: string;
}

interface showDetail {
  id: number;
  temperature: number;
  checkTemperature: null | string;
  isLike: boolean;
  hasDambyeolagWritten: boolean;
  exhibitionInfoRspDto: {
    id: number;
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
}
