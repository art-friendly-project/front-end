import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetMember } from 'hooks/query/useGetMember';
import { usePatchProfile } from 'hooks/query/usePatchProfile';
import BasicBtn from 'components/common/BasicBtn';
import Introduce from 'components/profileEdit/Introduce';
import Nickname from 'components/profileEdit/Nickname';
import ProfileImg from 'components/profileEdit/ProfileImg';

const ProfileEdit = () => {
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState('');
  const [nickName, setNickName] = useState('');
  const [selfIntro, setSelfIntro] = useState('');
  const [file, setFile] = useState<File | undefined>();

  const data = useGetMember();
  const mutate = usePatchProfile(file, nickName, selfIntro);

  useEffect(() => {
    if (data !== undefined) {
      setImageUrl(data.imageUrl);
      setNickName(data.nickName);
      if (data?.selfIntro !== null) {
        setSelfIntro(data.selfIntro);
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <ProfileImg
        setFile={setFile}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
      />
      <Nickname nickName={nickName} setNickName={setNickName} />
      <Introduce selfIntro={selfIntro} setSelfIntro={setSelfIntro} />
      <div className="flex items-end w-full pt-10 h-full pb-[5%]">
        <BasicBtn
          name="저장하기"
          fn={() => {
            mutate();
            navigate(-1);
          }}
        />
      </div>
    </div>
  );
};

export default ProfileEdit;
