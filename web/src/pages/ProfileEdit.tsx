import api from 'api';
import BtnBasic from 'components/common/BtnBasic';
import Introduce from 'components/profileEdit/Introduce';
import Nickname from 'components/profileEdit/Nickname';
import ProfileImg from 'components/profileEdit/ProfileImg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState('');
  const [nickName, setNickName] = useState('');
  const [selfIntro, setSelfIntro] = useState('');

  const [file, setFile] = useState<File | undefined>();

  const EditBtnHandler = async () => {
    try {
      await api.patch('/members', {
        nickName,
        selfIntro,
      });
      navigate('/profile');
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProfile = async () => {
    try {
      const profile: fetchUser = await api.get('/members');
      setImageUrl(profile.data.data.imageUrl);
      setNickName(profile.data.data.nickName);
      if (profile.data.data.selfIntro !== null) {
        setSelfIntro(profile.data.data.selfIntro);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProfileImg = async () => {
    const formData = new FormData();

    if (file !== undefined) formData.append('profileImage', file);
    try {
      await api.patch('/members/images', formData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchProfile();
  }, []);

  useEffect(() => {
    if (file !== undefined) void fetchProfileImg();
  }, [file]);

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
        <BtnBasic
          name="저장하기"
          disable={false}
          fn={() => {
            void EditBtnHandler();
          }}
        />
      </div>
    </div>
  );
};

export default ProfileEdit;
