import { useEffect, useRef, useState } from 'react';
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
  const [loading, setLoading] = useState(false);
  const [shows, setShows] = useState<show[]>([]);
  const [reviews, setReviews] = useState<savedReview[]>([]);
  const [page, setPage] = useState(0);
  const [user, setUser] = useState<user>({
    memberDetailsRspDto: {
      id: 0,
      email: '',
      imageUrl: '',
      nickName: '',
      selfIntro: '',
      mbtiSimpleRspDto: {
        imageUrl: '',
        subTitle: '',
        title: '',
      },
      artPreferenceTypeList: [],
    },
    StickerCount: 0,
    dambyeolagCount: 0,
    interestedExhibitionCount: 0,
  });

  const userId = useAppSelector(selectUserId);
  const myId = Number(localStorage.getItem('myId'));

  const bottomRef = useRef<HTMLDivElement>(null);

  const fetchProfile = async (id: number) => {
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
    if (userId === 0 && myId !== null) {
      void fetchProfile(myId);
    }

    if (userId !== 0) {
      void fetchProfile(userId);
    }
  }, [userId]);

  const fetchReviews = async () => {
    if (userId === 0 && myId !== null) {
      const result: fetchSavedReviews = await api.get(
        `/dambyeolags/lists/by-member?page=${page}&memberId=${myId}`,
      );
      setLoading(true);
      setReviews(result.data.data.content);
    }

    if (userId !== 0) {
      const result: fetchSavedReviews = await api.get(
        `/dambyeolags/lists/by-member?page=${page}&memberId=${userId}`,
      );
      setLoading(true);
      setReviews(result.data.data.content);
    }
  };

  useEffect(() => {
    void fetchReviews();
  }, []);

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setPage((prev) => prev + 1);
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
          loading={loading}
        />
        <InterestSection
          artPreferenceTypeList={user.memberDetailsRspDto.artPreferenceTypeList}
        />
        {userId === 0 ? (
          <ViewedShowAndReviewsSection
            reviews={reviews}
            shows={shows}
            setShows={setShows}
            userId={userId}
          />
        ) : (
          <ReviewSection reviews={reviews} userId={userId} />
        )}
      </div>
    </>
  );
};

export default Profile;
