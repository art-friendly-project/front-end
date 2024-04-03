import { type SetStateAction } from 'react';

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
  setSelectedList: React.Dispatch<SetStateAction<string[]>>;
}

const TasteList = ({ setSelectedList }: tasteList) => {
  return (
    <div className="flex flex-wrap overflow-y-scroll h-[70%]">
      {tastes.map((taste, idx) => (
        <TasteItem
          key={taste}
          taste={taste}
          tasteKr={tastesKr[idx]}
          setSelectedList={setSelectedList}
        />
      ))}
    </div>
  );
};

const tastes = [
  architecture,
  craft,
  graphic,
  design,
  cartoon,
  dance,
  literature,
  musical,
  broadcast,
  photograph,
  play,
  movie,
  music,
  decorativeArt,
  sculpture,
  festival,
  print,
  painting,
];

const tastesKr = [
  '건축',
  '공예',
  '그래픽',
  '디자인',
  '만화',
  '무용',
  '문예',
  '뮤지컬',
  '방송',
  '사진',
  '연극',
  '영화',
  '음악',
  '장식미술',
  '조각',
  '축제',
  '판화',
  '회화',
];

export default TasteList;
