import EditBtn from './EditBtn';
import TestSuggestBtn from './TestSuggestBtn';
import mainCharacter from 'assets/images/art-friendly/mainCharacter.svg';

interface profileTitle {
  isMyAccount: boolean;
  imageUrl: string;
  nickName: string;
  mbti: string | null;
}

const ProfileTitle = ({
  isMyAccount,
  imageUrl,
  nickName,
  mbti,
}: profileTitle) => {
  if (
    imageUrl ===
    'https://github.com/art-friendly-project/back-end/assets/68217405/f7d7d440-fde4-4d0d-b4fe-e3a4fa75d9bb'
  ) {
    imageUrl = mainCharacter;
  }
  return (
    <div className="relative flex items-center">
      <EditBtn />
      <img src={imageUrl} className="w-24 h-24" />
      <div className="flex flex-col ml-4">
        <span className="text-Headline text-gray-110">{nickName}</span>
        {mbti !== null ? (
          <span className="text-Body2-M text-gray-110">{mbti}</span>
        ) : (
          <TestSuggestBtn isMyAccount={isMyAccount} />
        )}
      </div>
    </div>
  );
};

export default ProfileTitle;
