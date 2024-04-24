import { useEffect, useState } from 'react';
import ProfileInfoSection from 'components/profile/ProfileInfoSection';
import InterestSection from '../components/profile/InterestSection';
import ViewedShowAndReviewsSection from '../components/profile/ViewedShowAndReviewsSection';
import { userData } from 'mock/mockData';

const Profile = () => {
  const [user, setUser] = useState<user>({
    id: 0,
    nickName: '',
    profileImage: '',
    isTest: false,
    testTitle: '',
    introduce: '',
    interests: [],
    reviews: [
      {
        showId: 0,
        reviewId: 0,
        image: '',
      },
    ],
  });
  useEffect(() => {
    setUser(userData);
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
      <ViewedShowAndReviewsSection />
    </>
  );
};

export default Profile;
