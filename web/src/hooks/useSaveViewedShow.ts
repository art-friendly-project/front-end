import { useEffect } from 'react';

const useSaveViewedShow = (show: showDetail) => {
  useEffect(() => {
    if (show.id === 0) return;
    const localViewedShowList = localStorage.getItem('viewedShowList');

    const showData = {
      id: show.id,
      title: show.exhibitionInfoRspDto.title,
      area: show.exhibitionInfoRspDto.area,
      startDate: show.exhibitionInfoRspDto.startDate,
      endDate: show.exhibitionInfoRspDto.endDate,
      imageUrl: show.exhibitionInfoRspDto.imageUrl,
      isLike: show.isLike,
      temperature: show.temperature,
    };

    if (localViewedShowList === null) {
      const showDataJson = JSON.stringify({ [show.id]: showData });

      localStorage.setItem('viewedShowList', showDataJson);
    }

    if (localViewedShowList !== null) {
      const viewedShowList = JSON.parse(localViewedShowList);
      viewedShowList[show.id] = showData;
      const AddViewedShowListJson = JSON.stringify(viewedShowList);

      localStorage.setItem('viewedShowList', AddViewedShowListJson);
    }
  }, [show]);
};

export default useSaveViewedShow;
