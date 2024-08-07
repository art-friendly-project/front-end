import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import api from 'api';
import BasicBtn from 'components/common/BasicBtn';
import Introduce from 'components/profileEdit/Introduce';
import Nickname from 'components/profileEdit/Nickname';
import ProfileImg from 'components/profileEdit/ProfileImg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [imageUrl, setImageUrl] = useState('');
  const [nickName, setNickName] = useState('');
  const [selfIntro, setSelfIntro] = useState('');
  const [file, setFile] = useState<File | undefined>();

  const getMember = async () => {
    const res = await api.get('/members');
    return res.data.data;
  };

  const patchProfile = async () => {
    if (file !== undefined) {
      const formData = new FormData();
      formData.append('profileImage', file);
      await api.patch('/members/images', formData);
    }

    await api.patch('/members', {
      nickName,
      selfIntro,
    });
  };

  const { data } = useQuery<member>({
    queryKey: ['user', 'member'],
    queryFn: getMember,
    staleTime: 30 * 60 * 1000,
  });

  const { mutate } = useMutation({
    mutationFn: patchProfile,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

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
