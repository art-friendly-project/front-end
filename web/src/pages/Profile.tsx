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
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const Profile = () => {
  const [shows, setShows] = useState<show[]>([]);
  const [totalPages, setTotalPage] = useState(0);

  const userId = useAppSelector(selectUserId);
  const myId = Number(localStorage.getItem('myId'));

  const bottomRef = useRef<HTMLDivElement>(null);

  const getProfile = async (id: number) => {
    const res: fetchProfile = await api.get(
      `/members/profiles?searchMemberId=${id}`,
    );

    return res.data.data;
  };

  const getMyReviews = async (page: number, id: number) => {
    const res: fetchSavedReviews = await api.get(
      `/dambyeolags/lists/by-member?page=${page}&memberId=${id}`,
    );

    setTotalPage(res.data.data.totalPages);
    return res.data.data.content;
  };

  const userQuery = useQuery({
    queryKey: ['user', 'profile', userId === 0 ? myId : userId],
    queryFn: async () => await getProfile(userId === 0 ? myId : userId),
  });
  const user = userQuery.data;

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['myReview', userId === 0 ? myId : userId],
    queryFn: async ({ pageParam }) =>
      await getMyReviews(pageParam, userId === 0 ? myId : userId),
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      const nextPage = lastPageParam + 1;
      if (nextPage < totalPages) {
        return nextPage;
      }
    },
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000,
  });

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

  const myReviews = data?.pages.reduce((prev, next) => {
    return prev.concat(next);
  });

  if (user === undefined || myReviews === undefined) {
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
