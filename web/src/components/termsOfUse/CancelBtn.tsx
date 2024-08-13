import { useDeleteMember } from 'hooks/query/useDeleteMember';
import { useNavigate } from 'react-router-dom';

const CancelBtn = () => {
  const mutate = useDeleteMember();
  const navigate = useNavigate();

  return (
    <button
      className="w-1/2 h-12 bg-white border rounded-lg border-gray-20"
      onClick={() => {
        mutate();
        navigate('/kakao-login');
      }}
    >
      <span className="text-Subhead text-gray-110">가입 취소</span>
    </button>
  );
};

export default CancelBtn;
