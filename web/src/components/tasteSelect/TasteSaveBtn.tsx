import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface tasteSaveBtn {
  selectedList: string[];
}

const TasteSaveBtn = ({ selectedList }: tasteSaveBtn) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center w-full">
      <button
        className={`flex items-center justify-center h-12 mt-8 text-white rounded-md w-92 ${selectedList.length > 0 ? 'bg-orange-100' : 'bg-orange-50'}`}
        disabled={!(selectedList.length > 0)}
        onClick={() => {
          navigate('/home');
        }}
      >
        <span className="mr-1 text-Subhead">저장하기</span>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default TasteSaveBtn;
