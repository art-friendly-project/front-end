interface profile {
  user: user;
  createdAt: string;
}

interface user {
  nickName: string;
  profileImage: string;
}

const Profile = ({ user, createdAt }: profile) => {
  return (
    <div className="relative flex items-center mb-8">
      <img src={user.profileImage} className="w-14 h-14" />
      <div className="flex flex-col ml-2">
        <span className="text-Body3 text-gray-110">{user.nickName}</span>
        <span className="text-Body2-M text-gray-80">{createdAt}</span>
      </div>
    </div>
  );
};

export default Profile;
