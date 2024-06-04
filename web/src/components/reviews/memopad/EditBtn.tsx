import { useNavigate, useParams } from 'react-router-dom';

const EditBtn = () => {
  const navigate = useNavigate();
  const id = useParams().id;

  const editBtnHandler = () => {
    navigate(`/review-edit/${id}`);
  };

  return (
    <button
      className="w-1/2 h-12 border-2 border-orange-100 rounded-lg active:bg-gray-acitve-100 left-7 bottom-4 text-Subhead text-gray-110"
      onClick={editBtnHandler}
    >
      수정하기
    </button>
  );
};

export default EditBtn;
