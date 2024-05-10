import EditBtn from './EditBtn';
import TestSuggestBtn from './TestSuggestBtn';

interface profileTitle {
  isMyAccount: boolean;
  profileImage: string;
  nickName: string;
  isTest: boolean;
  testTitle: string;
}

const ProfileTitle = ({
  isMyAccount,
  profileImage,
  nickName,
  isTest,
  testTitle,
}: profileTitle) => {
  return (
    <div className="relative flex items-center">
      <EditBtn />
      <img src={profileImage} className="w-24 h-24" />
      <div className="flex flex-col ml-4">
        <span className="text-Headline text-gray-110">{nickName}</span>
        {isTest ? (
          <span className="text-Body2-M text-gray-110">{testTitle}</span>
        ) : (
          <TestSuggestBtn isMyAccount={isMyAccount} />
        )}
      </div>
    </div>
  );
};

export default ProfileTitle;
