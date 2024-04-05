import posterExample1 from '../../../../assets/example/posterExample1.png';
import posterExample2 from '../../../../assets/example/posterExample2.png';
import posterExample3 from '../../../../assets/example/posterExample3.png';
import SuggestTasteShow from './SuggestTasteShow';

const SuggestTasteShowList = () => {
  return (
    <div className="overflow-x-scroll whitespace-nowrap scrollbar-hide pl-7 h-108 ">
      {suggestTasteShows.map((show) => (
        <SuggestTasteShow
          key={show.id}
          name={show.name}
          term={show.term}
          location={show.location}
          image={show.image}
        />
      ))}
    </div>
  );
};

const suggestTasteShows = [
  {
    id: 1,
    name: '전시회일',
    term: '24.02.01. ~ 24.05.01',
    location: '서울특별시 강남구 역삼동',
    image: posterExample1,
  },
  {
    id: 1,
    name: '전시회이',
    term: '24.02.02. ~ 24.05.02',
    location: '서울특별시 강남구 도곡동',
    image: posterExample2,
  },
  {
    id: 1,
    name: '전시회삼',
    term: '24.02.03. ~ 24.05.03',
    location: '서울특별시 강남구 대치동',
    image: posterExample3,
  },
];

export default SuggestTasteShowList;
