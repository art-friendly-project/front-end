import InformationBoard from './InformationBoard';
import Introduce from './Introduce';
import ProfileTitle from './ProfileTitle';

interface profileInfoSection {
  isMyAccount: boolean;
  imageUrl: string;
  nickName: string;
  selfIntro: string | null;
  mbti: string | null;
  StickerCount: number;
  dambyeolagCount: number;
  interestedExhibitionCount: number;
}

const ProfileInfoSection = ({
  isMyAccount,
  imageUrl,
  nickName,
  selfIntro,
  mbti,
  StickerCount,
  dambyeolagCount,
  interestedExhibitionCount,
}: profileInfoSection) => {
  return (
    <div className="shrink-0 flex flex-col px-[5%] pb-6 pt-6 w-full bg-orange-00">
      <ProfileTitle
        isMyAccount={isMyAccount}
        imageUrl={imageUrl}
        nickName={nickName}
        mbti={mbti}
      />
      <Introduce selfIntro={selfIntro} />
      <InformationBoard
        StickerCount={StickerCount}
        dambyeolagCount={dambyeolagCount}
        interestedExhibitionCount={interestedExhibitionCount}
      />
    </div>
  );
};

export default ProfileInfoSection;
