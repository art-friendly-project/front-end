import { usePostTerms } from 'hooks/query/usePostTerms';
import { useNavigate } from 'react-router-dom';

interface completeBtn {
  isChecks: boolean[];
}

const CompleteBtn = ({ isChecks }: completeBtn) => {
  const navigate = useNavigate();
  const mutate = usePostTerms();

  const btnHandler = () => {
    mutate();
    navigate('/taste-select');
  };

  return (
    <button
      className={`h-12 rounded-lg w-1/2 active:bg-orange-dark-100 ml-2 ${isChecks.includes(false) ? 'bg-orange-50' : 'bg-orange-100'}`}
      disabled={isChecks.includes(false)}
      onClick={btnHandler}
    >
      <span className="text-white text-Subhead">가입 완료</span>
    </button>
  );
};

export default CompleteBtn;
