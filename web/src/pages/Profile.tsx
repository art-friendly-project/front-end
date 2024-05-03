import { useEffect, useState } from 'react';
import ProfileInfoSection from 'components/profile/profileInfo/ProfileInfoSection';
import InterestSection from '../components/profile/interest/InterestSection';
import ViewedShowAndReviewsSection from '../components/profile/viewedShowAndReviews/ViewedShowAndReviewsSection';
import { userData } from 'mock/mockData';
import ReviewSection from 'components/profile/review/ReviewSection';
import { useParams } from 'react-router-dom';
import ConfirmModal from 'components/common/ConfirmModal';
import useToastHandler from 'hooks/useToastHandler';

const Profile = () => {
  const [shows, setShows] = useState<deadlineShow[]>([]);
  const params = useParams();
  const id = Number(params.id);
  const [user, setUser] = useState<user>({
    id: 0,
    nickName: '',
    profileImage: '',
    isTest: false,
    testTitle: '',
    introduce: '',
    interests: [],
    reviews: [],
  });

  const userId = Number(sessionStorage.getItem('userId'));

  const toastHandler = useToastHandler(
    false,
    '전시/행사 목록을 초기화했어요',
    '',
  );

  useEffect(() => {
    if (params.id === undefined) {
      setUser(userData[userId - 1]);
      return;
    }

    setUser(userData[id - 1]);
  }, [userData]);

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
          isMyAccount={user.id === userId}
          profileImage={user.profileImage}
          nickName={user.nickName}
          introduce={user.introduce}
          isTest={user.isTest}
          testTitle={user.testTitle}
        />
        <InterestSection interests={user.interests} />
        {user.id === userId ? (
          <ViewedShowAndReviewsSection
            reviews={user.reviews}
            shows={shows}
            setShows={setShows}
          />
        ) : (
          <ReviewSection reviews={user.reviews} />
        )}
      </div>
    </>
  );
};

export default Profile;
