import { useNavigate } from 'react-router-dom';
import mainCharacter from 'assets/images/art-friendly/mainCharacter.svg';
import { useAppDispatch } from 'hooks';
import { userIdActions } from 'store/modules/userId';
import api from 'api';
import isApp from 'utils/isApp';

interface profile {
  user: reviewDetail['memberResponseDto'];
  lastModifiedTime: string;
}

const Profile = ({ user, lastModifiedTime }: profile) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const btnHandler = async () => {
    try {
      await api.get(`/members/profiles?searchMemberId=${user.id}`);
      dispatch(userIdActions.current(user.id));
      navigate('/profile');
    } catch (err: any) {
      if (err.response.status === 400) {
        if (!isApp()) {
          alert('탈퇴한 사용자 입니다.');
        }

        if (isApp()) {
          window.ReactNativeWebView?.postMessage(
            JSON.stringify({ type: 'DELETE_ACCOUNT' }),
          );
        }
      }
      console.error(err);
    }
  };

  return (
    <div className="flex items-center mt-[15%] ml-[5%]">
      <button
        onClick={() => {
          void btnHandler();
        }}
      >
        <img src={user.imageUrl ?? mainCharacter} className="w-14 h-14" />
      </button>
      <div className="flex flex-col items-start mt-2 ml-2">
        <button
          onClick={() => {
            void btnHandler();
          }}
        >
          <span className="text-Body3 text-gray-110">{user.nickName}</span>
        </button>
        <span className="text-Body2-M text-gray-80">{lastModifiedTime}</span>
      </div>
    </div>
  );
};

export default Profile;
