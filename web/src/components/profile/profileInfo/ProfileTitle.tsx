import EditBtn from './EditBtn';
import TestSuggestBtn from './TestSuggestBtn';

interface profileTitle {
  isMyAccount: boolean;
  imageUrl: string;
  nickName: string;
  mbti: null | {
    imageUrl: string;
    subTitle: string;
    title: string;
  };
}

const ProfileTitle = ({
  isMyAccount,
  imageUrl,
  nickName,
  mbti,
}: profileTitle) => {
  return (
    <div className="relative flex items-center">
      <EditBtn />
      <img src={imageUrl} className="w-24 h-24 rounded-full" />
      <div className="flex flex-col ml-4">
        <span className="text-Headline text-gray-110">{nickName}</span>
        {mbti !== null ? (
          <div className="flex items-center">
            <div className="w-3 h-3 mt-0.5 mr-1 rounded-full bg-purple-90" />
            <span className="text-Body2-M text-gray-110">{mbti.title}</span>
          </div>
        ) : (
          <TestSuggestBtn isMyAccount={isMyAccount} />
        )}
      </div>
    </div>
  );
};

export default ProfileTitle;
