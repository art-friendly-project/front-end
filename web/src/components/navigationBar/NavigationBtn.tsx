import { useLocation, useNavigate } from 'react-router-dom';

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

  const changeInActiveOrActiveIcon = () => {
    if (!pathname.includes(endpoint)) return inActiveIcon;
    else return activeIcon;
  };

  return (
    <button
      className="flex flex-col items-center justify-center w-1/4"
      onClick={() => {
        if (pathname === endpoint) return;
        navigate(endpoint);
      }}
    >
      <img src={changeInActiveOrActiveIcon()} className="w-10 h-10 mb-1" />
      <span className="text-Body1-M text-gray-80">{name}</span>
    </button>
  );
};

export default NavigationBtn;
