import { useEffect, useState } from 'react';
import ProfileInfoSection from 'components/profile/profileInfo/ProfileInfoSection';
import InterestSection from '../components/profile/interest/InterestSection';
import ViewedShowAndReviewsSection from '../components/profile/viewedShowAndReviews/ViewedShowAndReviewsSection';
import { userData } from 'mock/mockData';
import ReviewSection from 'components/profile/review/ReviewSection';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const id = location.state;
  const myId = Number(localStorage.getItem('userId'));

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

  useEffect(() => {
    setUser(userData[id - 1]);
  }, [userData]);

  return (
    <>
      <ProfileInfoSection
        profileImage={user.profileImage}
        nickName={user.nickName}
        introduce={user.introduce}
        isTest={user.isTest}
        testTitle={user.testTitle}
      />
      <InterestSection interests={user.interests} />
      {user.id === myId ? (
        <ViewedShowAndReviewsSection reviews={user.reviews} />
      ) : (
        <ReviewSection reviews={user.reviews} />
      )}
    </>
  );
};

export default Profile;
