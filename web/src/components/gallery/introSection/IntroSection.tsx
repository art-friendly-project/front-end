import IntroBody from './IntroBody';
import IntroTitle from './IntroTitle';

interface introSection {
  introduce: string;
}

const IntroSection = ({ introduce }: introSection) => {
  return (
    <div className="flex flex-col mt-10">
      <IntroTitle />
      <IntroBody introduce={introduce} />
    </div>
  );
};

export default IntroSection;
