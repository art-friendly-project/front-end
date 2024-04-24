import { useEffect } from 'react';

const useSaveViewedShow = (show: deadlineShow) => {
  useEffect(() => {
    const localViewedShowList = localStorage.getItem('viewedShowList');

    const showData = {
      id: show.id,
      showType: show.showType,
      name: show.name,
      location: show.location,
      term: show.term,
      image: show.image,
      favorite: show.favorite,
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
