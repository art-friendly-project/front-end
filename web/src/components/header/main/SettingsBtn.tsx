import { IoSettingsOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const SettingsBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      className="absolute right-[5%] top-3 active:bg-gray-00 rounded-lg w-10 h-10 flex justify-center items-center"
      onClick={() => {
        navigate('/settings');
      }}
    >
      <IoSettingsOutline className="w-8 h-8" />
    </button>
  );
};

export default SettingsBtn;
