import { useDeleteReview } from 'hooks/query/useDeleteReview';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBtn = () => {
  const navigate = useNavigate();
  const param = useParams();
  const id = Number(param.id);

  const mutate = useDeleteReview(id);

  return (
    <button
      className="w-1/2 h-12 ml-4 text-white bg-orange-100 rounded-lg active:bg-orange-dark-100 right-7 bottom-4 text-Subhead"
      onClick={() => {
        mutate();
        navigate(-1);
      }}
    >
      삭제하기
    </button>
  );
};

export default DeleteBtn;
