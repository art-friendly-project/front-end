import { useEffect, useState } from 'react';
import ProfileInfoSection from 'components/profile/profileInfo/ProfileInfoSection';
import InterestSection from '../components/profile/interest/InterestSection';
import ViewedShowAndReviewsSection from '../components/profile/viewedShowAndReviews/ViewedShowAndReviewsSection';
import { userData } from 'mock/mockData';
import ReviewSection from 'components/profile/review/ReviewSection';
import { useParams } from 'react-router-dom';

const Profile = () => {
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

  return (
    <>
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
        <ViewedShowAndReviewsSection reviews={user.reviews} />
      ) : (
        <ReviewSection reviews={user.reviews} />
      )}
    </>
  );
};

export default Profile;
