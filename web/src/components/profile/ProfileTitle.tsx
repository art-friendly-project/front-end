import TestSuggestBtn from './TestSuggestBtn';

interface profileTitle {
  profileImage: string;
  nickName: string;
  isTest: boolean;
  testTitle: string;
}

const ProfileTitle = ({
  profileImage,
  nickName,
  isTest,
  testTitle,
}: profileTitle) => {
  return (
    <div className="flex items-center">
      <img src={profileImage} />
      <div className="flex flex-col ml-4">
        <span className="text-Headline text-gray-110">{nickName}</span>
        {isTest ? (
          <span className="text-Body2-M text-gray-110">{testTitle}</span>
        ) : (
          <TestSuggestBtn />
        )}
      </div>
    </div>
  );
};

export default ProfileTitle;
