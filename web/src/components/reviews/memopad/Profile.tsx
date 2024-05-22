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
    <div className="flex items-center mt-[15%] ml-[5%]">
      <button
        onClick={() => {
          navigate(`/profile/${user.id}`);
        }}
      >
        <img src={user.profileImage} className="w-14 h-14" />
      </button>
      <div className="flex flex-col ml-2">
        <button
          onClick={() => {
            navigate(`/profile/${user.id}`);
          }}
        >
          <span className="text-Body3 text-gray-110">{user.nickName}</span>
        </button>
        <span className="text-Body2-M text-gray-80">{createdAt}</span>
      </div>
    </div>
  );
};

export default Profile;
