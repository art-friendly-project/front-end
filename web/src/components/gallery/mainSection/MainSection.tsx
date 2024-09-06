import MainContents from './MainContents';

interface mainSection {
  imgUrl: string;
  name: string;
  location: string;
}

const MainSection = ({ imgUrl, name, location }: mainSection) => {
  return (
    <div className="flex items-end h-48 pl-[5%]">
      <MainContents imgUrl={imgUrl} name={name} location={location} />
    </div>
  );
};

export default MainSection;
