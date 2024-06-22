import { contents } from 'assets/data/termsOfuse';
import DetailModalContent from './DetailModalContent';

interface detailModalContents {
  isSelectModalIdx: number;
}

const DetailModalContents = ({ isSelectModalIdx }: detailModalContents) => {
  return (
    <div className="flex flex-col w-full h-screen mt-4 mb-12 overflow-y-scroll scrollbar-hide px-[5%]">
      {contents[isSelectModalIdx].map((content, idx) => (
        <DetailModalContent
          key={idx}
          title={content.title}
          content={content.content}
        />
      ))}
    </div>
  );
};

export default DetailModalContents;
