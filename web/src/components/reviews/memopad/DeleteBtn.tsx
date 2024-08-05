import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBtn = () => {
  const param = useParams();
  const { id } = param;

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteReview = async () => {
    await api.delete(`/dambyeolags?dambyeolagId=${id}`);
  };

  const { mutate } = useMutation({
    mutationFn: deleteReview,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['show'] });
    },
    onError: (err) => {
      console.error(err);
    },
  });

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
