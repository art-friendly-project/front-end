import { useNavigate } from 'react-router-dom';

interface profile {
  user: user;
  createdAt: string;
}

interface user {
  id: number;
  nickName: string;
  profileImage: string;
}

const Profile = ({ user, createdAt }: profile) => {
  const navigate = useNavigate();
  return (
    <button
      className="relative flex items-center mb-8"
      onClick={() => {
        navigate('/profile', { state: user.id });
      }}
    >
      <img src={user.profileImage} className="w-14 h-14" />
      <div className="flex flex-col ml-2">
        <span className="text-Body3 text-gray-110">{user.nickName}</span>
        <span className="text-Body2-M text-gray-80">{createdAt}</span>
      </div>
    </button>
  );
};

export default Profile;
