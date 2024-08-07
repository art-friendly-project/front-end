import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import ReviewPostContent from '../components/reviewPost/ReviewPostContent';
import ReviewPostTitle from '../components/reviewPost/ReviewPostTitle';

import api from 'api';
import BasicBtn from 'components/common/BasicBtn';

const ReviewEdit = () => {
  const param = useParams();
  const id = Number(param.id);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const getReview = async (id: number) => {
    const res = await api.get(`/dambyeolags?dambyeolagId=${id}`);
    return res.data.data;
  };

  const patchReview = async () => {
    const data = {
      title,
      body,
      dambyeolagId: id,
    };
    await api.patch('/dambyeolags', data);
  };

  const { data } = useQuery<reviewDetail>({
    queryKey: ['review', id],
    queryFn: async () => await getReview(id),
    staleTime: 5 * 60 * 1000,
  });

  const { mutate } = useMutation({
    mutationFn: patchReview,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['review'],
      });
    },
  });

  useEffect(() => {
    if (data !== undefined) {
      setTitle(data.title);
      setBody(data.body);
    }
  }, [data]);

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <ReviewPostTitle title={title} setTitle={setTitle} />
        <ReviewPostContent body={body} setBody={setBody} />
        <BasicBtn
          name="담벼락 수정하기"
          disable={title.length === 0 || body.length === 0}
          fn={() => {
            mutate();
            navigate(-1);
          }}
          style="sticky bottom-5 mt-auto"
        />
      </div>
    </>
  );
};

export default ReviewEdit;
