import BtnBasic from 'components/common/BtnBasic';
import Introduce from 'components/profileEdit/Introduce';
import Nickname from 'components/profileEdit/Nickname';
import ProfileImg from 'components/profileEdit/ProfileImg';
import { useState } from 'react';

const ProfileEdit = () => {
  const [name, setName] = useState('');
  const [intro, setIntro] = useState('');

  const EditBtnHandler = () => {};

  return (
    <div className="flex flex-col items-center w-full h-full">
      <ProfileImg />
      <Nickname name={name} setName={setName} />
      <Introduce intro={intro} setIntro={setIntro} />
      <div className="flex items-end w-full pt-10 h-full pb-[5%]">
        <BtnBasic name="저장하기" disable={false} fn={EditBtnHandler} />
      </div>
    </div>
  );
};

export default ProfileEdit;
