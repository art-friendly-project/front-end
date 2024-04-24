import { IoSettingsOutline } from 'react-icons/io5';

const SettingsBtn = () => {
  return (
    <button className="absolute right-[5%] top-4">
      <IoSettingsOutline className="w-8 h-8" />
    </button>
  );
};

export default SettingsBtn;
