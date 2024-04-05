import { useNavigate } from 'react-router-dom';
import logo2 from '../../assets/art-friendly/logo2.svg';

const Header = () => {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center w-full h-2/25"
      onClick={() => {
        navigate('/');
      }}
    >
      <img src={logo2} className="ml-4" />
    </button>
  );
};

export default Header;
