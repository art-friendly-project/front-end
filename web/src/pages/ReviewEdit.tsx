import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BtnBasic from 'components/common/BtnBasic';
import ReviewPostContent from '../components/reviewPost/ReviewPostContent';
import ReviewPostTitle from '../components/reviewPost/ReviewPostTitle';

import api from 'api';

const ReviewEdit = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dambyeolagId = useParams().id;

  const navigate = useNavigate();

  const fetchReivew = async () => {
    try {
      const result: fetchReviewDetail = await api.get(
        `/dambyeolags?dambyeolagId=${dambyeolagId}`,
      );
      setTitle(result.data.data.title);
      setBody(result.data.data.body);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchReivew();
  }, []);

  const btnHandler = async () => {
    const edit = {
      title,
      body,
      dambyeolagId,
    };

    try {
      await api.patch('/dambyeolags', edit);
      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-full">
        <ReviewPostTitle title={title} setTitle={setTitle} />
        <ReviewPostContent body={body} setBody={setBody} />
        <BtnBasic
          name="담벼락 수정하기"
          disable={title.length === 0 || body.length === 0}
          fn={() => {
            void btnHandler();
          }}
          style="sticky bottom-5 mt-auto"
        />
      </div>
    </>
  );
};

export default ReviewEdit;
