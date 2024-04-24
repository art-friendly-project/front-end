import InformationBoard from './InformationBoard';
import Introduce from './Introduce';
import ProfileTitle from './ProfileTitle';

interface profileInfoSection {
  profileImage: string;
  nickName: string;
  introduce: string;
  isTest: boolean;
  testTitle: string;
}

const ProfileInfoSection = ({
  profileImage,
  nickName,
  introduce,
  isTest,
  testTitle,
}: profileInfoSection) => {
  return (
    <div className="flex flex-col px-[5%] pt-6 w-full h-76 bg-orange-00">
      <ProfileTitle
        profileImage={profileImage}
        nickName={nickName}
        isTest={isTest}
        testTitle={testTitle}
      />
      <Introduce introduce={introduce} />
      <InformationBoard />
    </div>
  );
};

export default ProfileInfoSection;
