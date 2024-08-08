import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileInfoSection from 'components/profile/profileInfo/ProfileInfoSection';
import InterestSection from 'components/profile/interest/InterestSection';
import ViewedShowAndReviewsSection from 'components/profile/viewedShowAndReviews/ViewedShowAndReviewsSection';
import ReviewSection from 'components/profile/review/ReviewSection';
import ConfirmModal from 'components/common/ConfirmModal';
import useToastHandler from 'hooks/useToastHandler';
import useNavigateHome from 'hooks/useNavigateHome';
import { useGetProfile } from 'hooks/query/useGetProfile';
import { useGetMyReviews } from 'hooks/query/useGetMyReviews';
import { useAppSelector } from 'hooks';
import { selectUserId } from 'store/modules/userId';
import { useGetMember } from 'hooks/query/useGetMember';

const Profile = () => {
  const navigate = useNavigate();
  const bottomRef = useRef<HTMLDivElement>(null);

  const [shows, setShows] = useState<show[]>([]);

  const userId = useAppSelector(selectUserId);

  const member = useGetMember();
  const myId = member?.id;

  const user = useGetProfile(userId, myId);

  const { myReviews, fetchNextPage } = useGetMyReviews(userId, myId);

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      void fetchNextPage();
    }
  });

  useEffect(() => {
    const observeBottomRef = () => {
      if (bottomRef.current !== null) observer.observe(bottomRef.current);
    };

    const timeoutId = setTimeout(observeBottomRef, 500);

    return () => {
      clearTimeout(timeoutId);
      if (bottomRef.current !== null) observer.unobserve(bottomRef.current);
    };
  }, []);

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

  useNavigateHome(navigate);

  if (myReviews === undefined || user === undefined) {
    return <></>;
  }

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
        {userId === 0 ? (
          <ViewedShowAndReviewsSection
            myReviews={myReviews}
            shows={shows}
            setShows={setShows}
            userId={userId}
          />
        ) : (
          <ReviewSection myReviews={myReviews} userId={userId} />
        )}
      </div>
    </>
  );
};

export default Profile;
