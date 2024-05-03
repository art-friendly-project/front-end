import { IoSettingsOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const SettingsBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className="absolute right-[5%] top-4 active:bg-gray-00"
      onClick={() => {
        navigate('/settings');
      }}
    >
      <IoSettingsOutline className="w-8 h-8" />
    </button>
  );
};

export default SettingsBtn;
