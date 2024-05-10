import mainCharacter from 'assets/images/art-friendly/mainCharacter.svg';
import ImgEditBtn from 'components/profileEdit/ImgEditBtn';

const ProfileImg = () => {
  return (
    <div className="relative mt-10">
      <img src={mainCharacter} className="w-24 h-24" />
      <ImgEditBtn />
    </div>
  );
};

export default ProfileImg;
