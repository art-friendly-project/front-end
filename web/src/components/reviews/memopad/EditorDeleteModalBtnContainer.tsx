import api from 'api';
import { useNavigate, useParams } from 'react-router-dom';

const EditorDeleteModalBtnContainer = () => {
  const id = useParams().id;
  const navigate = useNavigate();

  const deleteBtnHandler = async () => {
    await api.delete(`/dambyeolags?dambyeolagId=${id}`);
    navigate(-1);
  };

  return (
    <div className="absolute flex justify-center w-full bottom-6 px-[5%]">
      <button className="w-1/2 h-12 border-2 border-orange-100 rounded-lg active:bg-gray-acitve-100 left-7 bottom-4 text-Subhead text-gray-110">
        수정하기
      </button>
      <button
        className="w-1/2 h-12 ml-4 text-white bg-orange-100 rounded-lg active:bg-orange-dark-100 right-7 bottom-4 text-Subhead"
        onClick={() => {
          void deleteBtnHandler();
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default EditorDeleteModalBtnContainer;
