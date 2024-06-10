import Info from './Info';
import Sns from './Sns';
import Terms from './Terms';

const Footer = () => {
  return (
    <div className="w-full bg-gray-10 px-[5%] flex flex-col pt-6">
      <Terms />
      <Sns />
      <Info />
    </div>
  );
};

export default Footer;
