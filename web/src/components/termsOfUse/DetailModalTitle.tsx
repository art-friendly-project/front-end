import { titles } from 'assets/data/termsOfuse';

interface detailModalTitle {
  isSelectModalIdx: number;
}

const DetailModalTitle = ({ isSelectModalIdx }: detailModalTitle) => {
  return <span className="text-Subhead">{titles[isSelectModalIdx]}</span>;
};

export default DetailModalTitle;
