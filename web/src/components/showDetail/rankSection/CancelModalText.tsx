import api from 'api';
import { useEffect, useState } from 'react';

const CancelModalText = () => {
  const [nickName, setNickName] = useState('');
  const fetchUser = async () => {
    try {
      const result: fetchUser = await api.get('/members');
      setNickName(result.data.data.nickName);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    void fetchUser();
  }, []);
  return (
    <>
      <span className="mt-6 text-center text-Headline-M text-gray-110">
        {nickName}님의 표현이 많은 사람들의
        <br />
        전시생활에 도움이 될 수 있어요!
      </span>
      <span className="mt-4 text-Body3-M text-gray-70">
        정말 취소하시겠어요?
      </span>
    </>
  );
};

export default CancelModalText;
