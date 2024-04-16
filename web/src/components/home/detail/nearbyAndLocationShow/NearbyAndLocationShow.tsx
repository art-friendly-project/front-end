import { useState } from 'react';
import FilterList from './FilterList';
import ShowList from './ShowList';
import FilterSelectModal from './FilterSelectModal';
import { nearbyShows } from 'mock/mockData';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectLocation } from 'store/modules/location';

const NearbyAndLocationShow = () => {
  const [isModalOpen, setIsModalOpen] = useState([false, false, false]);
  const location = useAppSelector(selectLocation);
  const [showType, setShowType] = useState('exhibition');
  const [priority, setPriority] = useState('popularity');

  const dispatch = useAppDispatch();
  const openModalIndex = isModalOpen.indexOf(true);

  const selectModalInfos = [
    {
      title1: '내 근처 전시/행사',
      title2: '전시/행사를 보고 싶은 지역을 선택해보세요',
      selects: [
        ['seoul', '서울'],
        ['gyeonggi-incheon', '경기/인천'],
        ['gangwon', '강원'],
        ['gyeongnam-busan', '경남/부산'],
        ['gyeongbuk-daegu', '경북/대구'],
        ['chungcheong-daejeon', '충청/대전'],
        ['jeolla-gwangju', '전라/광주'],
        ['jeju', '제주'],
      ],
      setState: dispatch,
    },
    {
      title1: '전시/행사',
      title2: '전시와 행사 중 어떤 것을 보고 싶으신가요?',
      selects: [
        ['exhibition', '전시'],
        ['event', '행사'],
      ],
      setState: setShowType,
    },
    {
      title1: '인기순/최신순',
      title2: '선택한 순으로 전시회를 알려드려요',
      selects: [
        ['popularity', '인기순'],
        ['latest', '최신순'],
      ],
      setState: setPriority,
    },
  ];

  return (
    <>
      {isModalOpen.includes(true) ? (
        <FilterSelectModal
          title1={selectModalInfos[openModalIndex].title1}
          title2={selectModalInfos[openModalIndex].title2}
          selects={selectModalInfos[openModalIndex].selects}
          setState={selectModalInfos[openModalIndex].setState}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
      <FilterList
        location={location}
        priority={priority}
        showType={showType}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <ShowList nearbyShows={nearbyShows} />
    </>
  );
};

export default NearbyAndLocationShow;
