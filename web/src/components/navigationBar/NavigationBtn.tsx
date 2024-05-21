import { useAppDispatch } from 'hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { userIdActions } from 'store/modules/userId';

interface navigationBtn {
  name: string;
  endpoint: string;
  inActiveIcon: string;
  activeIcon: string;
}

const NavigationBtn = ({
  name,
  endpoint,
  inActiveIcon,
  activeIcon,
}: navigationBtn) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const dispatch = useAppDispatch();

  const changeInActiveOrActiveIcon = () => {
    if (!pathname.includes(endpoint)) return inActiveIcon;
    else return activeIcon;
  };

  const btnHandler = () => {
    navigate(endpoint);

    if (name === '프로필') {
      dispatch(userIdActions.current('0'));
    }
  };

  return (
    <button
      className="flex flex-col items-center justify-center w-1/4 rounded-2xl active:bg-gray-00"
      onClick={btnHandler}
    >
      <img src={changeInActiveOrActiveIcon()} className="w-10 h-10 mb-1" />
      <span className="text-Body1-M text-gray-80">{name}</span>
    </button>
  );
};

export default NavigationBtn;
