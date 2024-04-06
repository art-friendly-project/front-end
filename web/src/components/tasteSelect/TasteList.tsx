import TasteItem from './TasteItem';
import architecture from '../../assets/taste/architecture.png';
import craft from '../../assets/taste/craft.png';
import graphic from '../../assets/taste/graphic.png';
import design from '../../assets/taste/design.png';
import cartoon from '../../assets/taste/cartoon.png';
import dance from '../../assets/taste/dance.png';
import literature from '../../assets/taste/literature.png';
import musical from '../../assets/taste/musical.png';
import broadcast from '../../assets/taste/broadcast.png';
import photograph from '../../assets/taste/photograph.png';
import play from '../../assets/taste/play.png';
import movie from '../../assets/taste/movie.png';
import music from '../../assets/taste/music.png';
import decorativeArt from '../../assets/taste/decorativeArt.png';
import sculpture from '../../assets/taste/sculpture.png';
import festival from '../../assets/taste/festival.png';
import print from '../../assets/taste/print.png';
import painting from '../../assets/taste/painting.png';

interface tasteList {
  setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TasteList = ({ setSelectedList }: tasteList) => {
  return (
    <div className="flex flex-wrap px-4 mb-10 overflow-y-scroll h-7/10 scrollbar-hide">
      {tastes.map((taste) => (
        <TasteItem
          key={taste.id}
          tasteImg={taste.image}
          tasteName={taste.name}
          setSelectedList={setSelectedList}
        />
      ))}
    </div>
  );
};

const tastes = [
  { id: 1, name: '건축', image: architecture },
  { id: 2, name: '공예', image: craft },
  { id: 3, name: '그래픽', image: graphic },
  { id: 4, name: '디자인', image: design },
  { id: 5, name: '만화', image: cartoon },
  { id: 6, name: '무용', image: dance },
  { id: 7, name: '문예', image: literature },
  { id: 8, name: '뮤지컬', image: musical },
  { id: 9, name: '방송', image: broadcast },
  { id: 10, name: '사진', image: photograph },
  { id: 11, name: '연극', image: play },
  { id: 12, name: '영화', image: movie },
  { id: 13, name: '음악', image: music },
  { id: 14, name: '장식미술', image: decorativeArt },
  { id: 15, name: '조각', image: sculpture },
  { id: 16, name: '축제', image: festival },
  { id: 17, name: '판화', image: print },
  { id: 18, name: '회화', image: painting },
];

export default TasteList;
