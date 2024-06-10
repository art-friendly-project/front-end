import { useLocation } from 'react-router-dom';
import HeaderTitle from './HeaderTitle';
import SettingsBtn from './SettingsBtn';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="sticky top-0 z-20 flex items-center justify-center flex-shrink-0 w-full bg-white h-18">
      <HeaderTitle />
      {pathname === '/profile' ? <SettingsBtn /> : null}
    </div>
  );
};

export default Header;
