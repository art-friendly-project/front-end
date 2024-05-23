import { useNavigate } from 'react-router-dom';
import mainCharacter from 'assets/images/art-friendly/mainCharacter.svg';
import { useAppDispatch } from 'hooks';
import { userIdActions } from 'store/modules/userId';

interface profile {
  user: reviewDetail['memberResponseDto'];
  lastModifiedTime: string;
}

const Profile = ({ user, lastModifiedTime }: profile) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const btnHandler = () => {
    dispatch(userIdActions.current(user.id));
    navigate('/profile');
  };

  return (
    <div className="flex items-center mt-[15%] ml-[5%]">
      <button onClick={btnHandler}>
        <img src={user.imageUrl ?? mainCharacter} className="w-14 h-14" />
      </button>
      <div className="flex flex-col items-start mt-2 ml-2">
        <button onClick={btnHandler}>
          <span className="text-Body3 text-gray-110">{user.nickName}</span>
        </button>
        <span className="text-Body2-M text-gray-80">{lastModifiedTime}</span>
      </div>
    </div>
  );
};

export default Profile;
