import { useGetMember } from 'hooks/query/useGetMember';

const CancelModalText = () => {
  const data = useGetMember();

  return (
    <>
      <span className="mt-6 text-center text-Headline-M text-gray-110">
        {data?.nickName}님의 표현이 많은 사람들의
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
