import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface btnAndRightArrow {
  selectedList?: string[];
  setIsTest?: React.Dispatch<React.SetStateAction<boolean>>;
  endpoint: string;
  name: string;
}

const BtnAndRightArrow = ({
  selectedList,
  endpoint,
  name,
  setIsTest,
}: btnAndRightArrow) => {
  const navigate = useNavigate();

  const BtnStyle = () => {
    if (selectedList === undefined) {
      return `flex items-center justify-center h-12 text-white rounded-md w-9/10 bg-orange-100`;
    }

    if (selectedList !== undefined) {
      return `flex items-center justify-center h-12 text-white rounded-md w-9/10 ${selectedList.length > 0 ? 'bg-orange-100' : 'bg-orange-50'}`;
    }
  };

  return (
    <button
      className={BtnStyle()}
      disabled={selectedList !== undefined ? !(selectedList.length > 0) : false}
      onClick={() => {
        navigate(endpoint);
        setIsTest !== undefined && setIsTest(true);
      }}
    >
      <span className="mr-1 text-Subhead">{name}</span>
      <IoIosArrowForward />
    </button>
  );
};

export default BtnAndRightArrow;
