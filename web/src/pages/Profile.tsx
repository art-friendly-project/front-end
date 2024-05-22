import { useEffect, useState } from 'react';
import ProfileInfoSection from 'components/profile/profileInfo/ProfileInfoSection';
import InterestSection from 'components/profile/interest/InterestSection';
import ViewedShowAndReviewsSection from 'components/profile/viewedShowAndReviews/ViewedShowAndReviewsSection';
import ReviewSection from 'components/profile/review/ReviewSection';
import ConfirmModal from 'components/common/ConfirmModal';
import useToastHandler from 'hooks/useToastHandler';
import api from 'api';
import { useAppSelector } from 'hooks';
import { selectUserId } from 'store/modules/userId';

const Profile = () => {
  const [shows, setShows] = useState<show[]>([]);
  const [user, setUser] = useState<user>({
    memberDetailsRspDto: {
      id: 0,
      email: '',
      imageUrl: '',
      nickName: '',
      selfIntro: '',
      mbtiSimpleRspDto: '',
      artPreferenceTypeList: [],
    },
    StickerCount: 0,
    dambyeolagCount: 0,
    interestedExhibitionCount: 0,
  });

  const userId = useAppSelector(selectUserId);
  const myId = localStorage.getItem('myId');

  const fetchProfile = async (id: string) => {
    try {
      const profile: fetchProfile = await api.get(
        `/members/profiles?searchMemberId=${id}`,
      );
      setUser(profile.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (userId === '0' && myId !== null) {
      void fetchProfile(myId);
    }

    if (userId !== '0') {
      void fetchProfile(userId);
    }
  }, [userId]);

  const toastHandler = useToastHandler(
    false,
    '전시/행사 목록을 초기화했어요',
    '',
  );

  const conformModalFn = () => {
    localStorage.removeItem('viewedShowList');
    setShows([]);
    toastHandler();
  };

  return (
    <>
      <ConfirmModal
        text={`조회한 전시/행사를\n초기화할까요?`}
        fn={conformModalFn}
      />
      <div className="flex flex-col w-full h-full">
        <ProfileInfoSection
          isMyAccount={true}
          imageUrl={user.memberDetailsRspDto.imageUrl}
          nickName={user.memberDetailsRspDto.nickName}
          selfIntro={user.memberDetailsRspDto.selfIntro}
          mbti={user.memberDetailsRspDto.mbtiSimpleRspDto}
          StickerCount={user.StickerCount}
          dambyeolagCount={user.dambyeolagCount}
          interestedExhibitionCount={user.interestedExhibitionCount}
        />
        <InterestSection
          artPreferenceTypeList={user.memberDetailsRspDto.artPreferenceTypeList}
        />
        {userId === '0' ? (
          <ViewedShowAndReviewsSection
            reviews={[]}
            shows={shows}
            setShows={setShows}
          />
        ) : (
          <ReviewSection reviews={[]} />
        )}
      </div>
    </>
  );
};

export default Profile;
