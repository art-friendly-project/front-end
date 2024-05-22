import ImgEditBtn from 'components/profileEdit/ImgEditBtn';
import { type Dispatch, type SetStateAction } from 'react';

interface profileImg {
  setFile: Dispatch<SetStateAction<File | undefined>>;
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
}

const ProfileImg = ({ setFile, imageUrl, setImageUrl }: profileImg) => {
  return (
    <div className="relative mt-10">
      <img src={imageUrl} className="w-24 h-24" />
      <ImgEditBtn setFile={setFile} setImageUrl={setImageUrl} />
    </div>
  );
};

export default ProfileImg;
