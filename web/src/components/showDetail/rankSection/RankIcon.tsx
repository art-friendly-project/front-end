import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from 'api';
import { type Dispatch, type SetStateAction } from 'react';

interface rankIcon {
  id: number;
  idx: number;
  icon: string[];
  isSelectedRank: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  checkTemperature: string | null;
}

const RankIcon = ({
  id,
  idx,
  icon,
  isSelectedRank,
  setIsModal,
  checkTemperature,
}: rankIcon) => {
  const queryClient = useQueryClient();

  const postOrPatchRank = async () => {
    if (checkTemperature === null) {
      return await api.post(
        `/exhibitions/hopes?exhibitionId=${id}&hopeIndex=${idx + 1}`,
      );
    } else {
      return await api.patch(
        `/exhibitions/hopes?exhibitionId=${id}&hopeIndex=${idx + 1}`,
      );
    }
  };

  const { mutate } = useMutation({
    mutationFn: postOrPatchRank,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['show', 'detail'] });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const btnHandler = async () => {
    if (isSelectedRank) {
      setIsModal(true);
    }

    if (!isSelectedRank) {
      mutate();
    }
  };

  return (
    <button
      onClick={() => {
        void btnHandler();
      }}
      className="flex items-center justify-center rounded-lg h-28 w-18 active:bg-gray-00"
    >
      <img src={isSelectedRank ? icon[1] : icon[0]} />
    </button>
  );
};

export default RankIcon;
