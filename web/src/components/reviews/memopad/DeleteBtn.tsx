import api from 'api';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBtn = () => {
  const id = useParams().id;
  const navigate = useNavigate();

  const deleteBtnHandler = async () => {
    await api.delete(`/dambyeolags?dambyeolagId=${id}`);
    navigate(-1);
  };

  return (
    <button
      className="w-1/2 h-12 ml-4 text-white bg-orange-100 rounded-lg active:bg-orange-dark-100 right-7 bottom-4 text-Subhead"
      onClick={() => {
        void deleteBtnHandler();
      }}
    >
      삭제하기
    </button>
  );
};

export default DeleteBtn;
