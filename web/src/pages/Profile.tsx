import { useEffect, useState } from 'react';
import ProfileInfoSection from 'components/profile/profileInfo/ProfileInfoSection';
import InterestSection from '../components/profile/interest/InterestSection';
import ViewedShowAndReviewsSection from '../components/profile/viewedShowAndReviews/ViewedShowAndReviewsSection';
import { userData } from 'mock/mockData';
import ReviewSection from 'components/profile/review/ReviewSection';
import { useParams } from 'react-router-dom';
import ConfirmModal from 'components/common/ConfirmModal';

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

  const myId = Number(sessionStorage.getItem('myId'));

  useEffect(() => {
    if (params.id === undefined) {
      setUser(userData[myId - 1]);
      return;
    }

    setUser(userData[id - 1]);
  }, [userData]);

  const conformModalFn = () => {
    localStorage.removeItem('viewedShowList');
    setShows([]);
  };

  return (
    <>
      <ConfirmModal
        text={`조회한 전시/행사를\n초기화할까요?`}
        fn={conformModalFn}
      />
      <div className="flex flex-col w-full h-full">
        <ProfileInfoSection
          isMyAccount={user.id === myId}
          profileImage={user.profileImage}
          nickName={user.nickName}
          introduce={user.introduce}
          isTest={user.isTest}
          testTitle={user.testTitle}
        />
        <InterestSection interests={user.interests} />
        {user.id === myId ? (
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
