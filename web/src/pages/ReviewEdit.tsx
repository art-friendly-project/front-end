import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReviewPostContent from '../components/reviewPost/ReviewPostContent';
import ReviewPostTitle from '../components/reviewPost/ReviewPostTitle';
import BasicBtn from 'components/common/BasicBtn';
import { useGetReview } from 'hooks/query/useGetReview';
import { usePatchReview } from 'hooks/query/usePatchReview';

const ReviewEdit = () => {
  const param = useParams();
  const id = Number(param.id);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();

  const data = useGetReview(id);
  const mutate = usePatchReview(id, title, body);

  useEffect(() => {
    setTitle(data.title);
    setBody(data.body);
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
